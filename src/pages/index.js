import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import DecorIntersect1 from "@/images/decor-intersect1.svg";
import DecorTextUnderline from "@/images/text-hero-decore.svg";
import DecorOrnament1 from "@/images/plus-collections.svg";
import DecorSwirl1 from "@/images/decor-swirl.svg";
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
					<div className="max-w-[1280px] mx-auto pt-28 px-4">
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
								<p className="text-custom-body-text leading-8 mb-8">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
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
								<span className="absolute top-7 left-24">
									<Image width={155} height={155} src="/img/plane.png" alt="plane ornament" />
								</span>
								<span className="absolute top-[70px] -right-7 -z-[1px]">
									<Image width={155} height={155} src="/img/plane.png" alt="plane ornament" />
								</span>
								<span className="relative">
									<Image width={700} height={700} className="object-center" src="/img/hero-traveller.png" alt="Picture the traveller" />
								</span>
							</div>
						</div>
					</div>
				</section>
				<section className="mb-32">
					<div className="max-w-[1280px] mx-auto px-4 relative">
						<DecorOrnament1 className="ornament-plus1 absolute top-0 right-0" />
						<div className="mb-6">
							<h3 className="uppercase font-sans font-semibold text-lg text-custom-body-text text-center">category</h3>
							<h2 className="text-center font-serif text-[50px]">We Offer Best Services</h2>
						</div>
						<div className="grid grid-cols-4 gap-10 relative text-custom-body-text">
							<div className="category-card-hover-effect">
								<div className="text-center flex flex-col justify-between px-11 py-[45px]">
									<div className="relative w-full h-[150px]">
										<figure className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 z-[1]">
											<Image src="/img/anthena.png" width={70} height={70} alt="Radar" />
										</figure>
										<span className="absolute block w-[50px] h-[49px] bg-custom-milk bottom-7 right-10 rounded-[5px] rounded-br-[18px] rounded-tl-[10px]"></span>
									</div>
									<div>
										<span className="font-open-sans block mb-3 text-custom-dark-blue font-semibold text-xl">Calculated Weather</span>
										<p className="font-sans leading-relaxed text-[16px] font-medium">Built Wicket longer admire do barton vanity itself do in it.</p>
									</div>
								</div>
							</div>
							<div className="category-card-hover-effect">
								<div className="text-center flex flex-col justify-between px-11 py-[45px]">
									<div className="relative w-full h-[150px]">
										<figure className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 z-[1]">
											<Image src="/img/plane-illustration.png" width={137} height={95} alt="Plane" />
										</figure>
										<span className="absolute block w-[50px] h-[49px] bg-custom-milk top-9 left-2/4 -translate-x-2/4 rounded-[5px] rounded-br-[18px] rounded-tl-[10px]"></span>
									</div>
									<div>
										<span className="font-open-sans block mb-3 text-custom-dark-blue font-semibold text-xl">Best Flights</span>
										<p className="font-sans leading-relaxed text-[16px] font-medium">Built Wicket longer admire do barton vanity itself do in it.</p>
									</div>
								</div>
							</div>
							<div className="category-card-hover-effect">
								<div className="text-center flex flex-col justify-between px-11 py-[45px]">
									<div className="relative w-full h-[150px]">
										<figure className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 z-[1]">
											<Image src="/img/mic.png" width={41} height={70} alt="Plane" />
										</figure>
										<span className="absolute block w-[50px] h-[49px] bg-custom-milk top-8 right-14 rounded-[5px] rounded-tr-[18px] rounded-bl-[10px]"></span>
									</div>
									<div>
										<span className="font-open-sans block mb-3 text-custom-dark-blue font-semibold text-xl">Local Events</span>
										<p className="font-sans leading-relaxed text-[16px] font-medium">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
									</div>
								</div>
							</div>
							<div className="category-card-hover-effect">
								<div className="text-center flex flex-col justify-between px-11 py-[45px]">
									<div className="relative w-full h-[150px]">
										<figure className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 z-[1]">
											<Image src="/img/gear.png" width={50} height={50} alt="Plane" />
										</figure>
										<span className="absolute block w-[50px] h-[49px] bg-custom-milk bottom-8 right-10 rounded-[5px] rounded-tr-[18px] rounded-bl-[10px]"></span>
									</div>
									<div>
										<span className="font-open-sans block mb-3 text-custom-dark-blue font-semibold text-xl">Customization</span>
										<p className="font-sans leading-relaxed text-[16px] font-medium">We deliver outsourced aviation services for military customers</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="max-w-[1280px] mx-auto px-4 relative">
						<div className="mb-16">
							<h3 className="uppercase font-sans font-semibold text-lg text-custom-body-text text-center">top selling</h3>
							<h2 className="text-center font-serif text-[50px]">Top Destinations</h2>
						</div>
						<div className="relative">
							<span className="absolute -right-[63px] bottom-14 -z-[1]">
								<DecorSwirl1 />
							</span>
							<div className="grid grid-cols-3 gap-x-20">
								<div className="overflow-hidden rounded-[24px] shadow-[0px_40px_70px_-35px_rgba(0,0,0,0.2)] group">
									<div>
										<figure className="overflow-hidden max-h-96">
											<Image src="/img/italy.jpg" className="transition-all duration-500 scale-100 group-hover:scale-110" width={500} height={650} alt="Rome Italy" />
										</figure>
									</div>
									<div className="bg-white px-5 py-7 text-custom-body-text">
										<p className="flex justify-between font-sans font-medium mb-5">
											<span>Rome, Italy</span>
											<span>$5,42k</span>
										</p>
										<p className="text-sm mb-3">
											<span className="material-symbols-outlined inline-block align-middle text-custom-black">near_me</span> 10 Days Trip
										</p>
									</div>
								</div>
								<div className="overflow-hidden rounded-[24px] shadow-[0px_40px_70px_-35px_rgba(0,0,0,0.2)] group">
									<div>
										<figure className="overflow-hidden max-h-96">
											<Image src="/img/london.jpg" className="transition-all duration-500 scale-100 group-hover:scale-110" width={500} height={600} alt="Rome Italy" />
										</figure>
									</div>
									<div className="bg-white px-5 py-7 text-custom-body-text">
										<p className="flex justify-between font-sans font-medium mb-5">
											<span>London, UK</span>
											<span>$4.2k</span>
										</p>
										<p className="text-sm mb-3">
											<span className="material-symbols-outlined inline-block align-middle text-custom-black">near_me</span> 11 Days Trip
										</p>
									</div>
								</div>
								<div className="overflow-hidden rounded-[24px] shadow-[0px_40px_70px_-35px_rgba(0,0,0,0.2)] group">
									<div>
										<figure className="overflow-hidden max-h-96">
											<Image src="/img/europe.jpg" className="transition-all duration-500 scale-100 group-hover:scale-110" width={500} height={600} alt="Rome Italy" />
										</figure>
									</div>
									<div className="bg-white px-5 py-7 text-custom-body-text">
										<p className="flex justify-between font-sans font-medium mb-5">
											<span>Full Europe</span>
											<span>$15k</span>
										</p>
										<p className="text-sm mb-3">
											<span className="material-symbols-outlined inline-block align-middle text-custom-black">near_me</span> 12 Days Trip
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-16"></section>
			</main>
		</>
	);
}
