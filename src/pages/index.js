import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import DecorIntersect1 from "@/images/decor-intersect1.svg";
import DecorTextUnderline from "@/images/text-hero-decore.svg";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Jadoo</title>
				<meta name="description" content="Jadoo App Travel" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="w-full dark:bg-slate-900">
				<section className="relative h-screen flex items-center">
					{/* background ornament */}
					<span className="absolute right-0 top-0">
						<DecorIntersect1 className="fill-custom-milk" />
					</span>
					<span className="w-[479px] h-[497px] block bg-custom-purple/50 rounded-full blur-[70px] absolute top-[-60px] -left-[370px]"></span>
					{/* End */}
					<div className="max-w-[1280px] mx-auto pt-28">
						<div className="grid grid-cols-2 items-center">
							<div>
								<h1 className="uppercase text-custom-red font-bold text-xl mb-6">Best Destinations around the world</h1>
								<h2 className="text-gray-900 font-serif text-[84px] leading-[110px] tracking-tighter mb-8">
									Travel,{" "}
									<span className="inline-block relative">
										enjoy
										<span className="absolute -left-10 bottom-[10px] -z-10">
											<DecorTextUnderline className="w-[385px] h-[12px]" />
										</span>
									</span>{" "}
									and live a new and full life
								</h2>
								<p className="text-gray-500 leading-8 mb-8">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
								<div className="flex items-center space-x-10">
									<Link legacyBehavior href="/">
										<a className="font-sans block bg-custom-yellow text-white rounded-lg px-6 py-4 shadow-custom-yellow/10 shadow-[0_20px_35px]">Find out more</a>
									</Link>
									<button className="flex items-center space-x-5">
										<span className="bg-custom-red inline-block relative w-14 h-14 rounded-full shadow-custom-red/30 shadow-[0_15px_30px] before:absolute before:content-[''] before:border-white before:border-[6px] before:border-t-transparent before:border-l-transparent before:top-2/4 before:left-2/5 before:-translate-x-2/3 before:-translate-y-2/4 before:origin-center before:-rotate-45"></span>
										<span className="text-gray-500 capitalize">play demo</span>
									</button>
								</div>
							</div>
							<div className="relative">
								<span className="absolute w-[137px] h-[95px] top-40">
									<Image width={300} height={300} src="/img/plane.png" alt="plane ornament" />
								</span>
								<Image width={700} height={700} src="/img/hero-traveller.png" alt="Picture the traveller" />
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
