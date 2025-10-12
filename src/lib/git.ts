import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';

const execFileAsync = promisify(execFile);

export async function getLastModifiedIso(filePath: string): Promise<string | null> {
  try {
    const { stdout } = await execFileAsync('git', ['log', '-1', '--pretty=%ad', '--date=iso', filePath], { windowsHide: true });
    const out = stdout.trim();
    if (out) return out;
  } catch {}
  try {
    const stat = await fs.stat(filePath);
    return stat.mtime.toISOString();
  } catch {}
  return null;
}
