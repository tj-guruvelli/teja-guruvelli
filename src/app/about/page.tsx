import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
	return (
		<main className="pt-24 min-h-screen">
			<section className="py-12 bg-gray-800">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row">
						<div className="md:w-1/2">
							<div className="relative w-full h-[600px]">
								<Image
									src="/imgs/IMG_5276.JPG"
									alt="Teja Guruvelli"
									fill
									className="object-cover object-center"
									priority
								/>
							</div>
						</div>
						<div className="md:w-1/2">
							<div className="bg-black text-white p-12 h-full flex flex-col justify-center">
								<h1 className="text-4xl font-bold mb-8">About Me</h1>
								<p className="mb-4">
									I'm Teja Guruvelli, a Computer Science student at Clemson
									University with a focus on Cybersecurity. I'm passionate about
									technology, problem-solving, and continuous learning.
								</p>
								<p className="mb-4">
									As a car enthusiast, I enjoy exploring the intersection of
									automotive technology and computer science. This unique
									perspective allows me to approach problems with creativity and
									technical precision.
								</p>
								<p className="mb-4">
									When I'm not coding or studying, you can find me participating
									in various athletic activities or enjoying the outdoors. I
									believe in maintaining a balanced lifestyle that nurtures both
									mind and body.
								</p>
								<p>
									I'm constantly seeking new challenges and opportunities to
									grow both personally and professionally. My goal is to
									contribute to innovative solutions that make a positive impact
									on society.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
