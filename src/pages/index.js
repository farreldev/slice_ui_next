import Head from "next/head";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import DecorIntersect1 from "@/images/decor-intersect1.svg";
import DecorTextUnderline from "@/images/text-hero-decore.svg";
import DecorOrnament1 from "@/images/plus-collections.svg";
import DecorOrnament2 from "@/images/plus-collections2.svg";
import DecorSwirl1 from "@/images/decor-swirl.svg";
import Fb from "@/images/facebook.svg";
import Insta from "@/images/instagram.svg";
import Tw from "@/images/twitter.svg";
import Spiral1 from "@/images/spiral1.svg";
import Spiral2 from "@/images/spiral2.svg";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Jadoo</title>
				<meta name="description" content="Jadoo App Travel, travel app, life app, aplikasi jalan-jalan, pesan guide, dan sebagainya" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:url" content="https://slice-ui-next.vercel.app" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Jadoo" />
				<meta property="og:description" content="travel app, life app, aplikasi jalan-jalan, pesan guide, dan sebagainya" />
				<meta property="og:image" content="https://slice-ui-next.vercel.app/aplikasi-travel-online.jpg" />
			</Head>

			<Header />
			<main className="w-full dark:bg-slate-900">
				<section className="relative py-16 flex items-center">
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
									<Image priority width={700} height={700} className="object-center" src="/img/hero-traveller.png" alt="Picture the traveller" />
								</span>
							</div>
						</div>
					</div>
				</section>
				<section className="py-20">
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
				<section className="py-20">
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
											<span className="material-symbols-outlined inline-block align-middle text-custom-black text-xl mr-1.5">near_me</span> 10 Days Trip
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
											<span className="material-symbols-outlined inline-block align-middle text-custom-black text-xl mr-1.5">near_me</span> 11 Days Trip
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
											<span className="material-symbols-outlined inline-block align-middle text-custom-black text-xl mr-1.5">near_me</span> 12 Days Trip
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-20">
					<div className="max-w-[1280px] mx-auto px-4 relative">
						<div className="flex w-full justify-between space-x-5">
							<div className="max-w-[calc(90%/2)]">
								<h3 className="uppercase font-sans font-semibold text-lg text-custom-body-text">easy and fast</h3>
								<h2 className="font-serif text-[50px] capitalize mb-8">Book your next trip in 3 easy steps</h2>
								<ul className="space-y-10 text-custom-body-text">
									<li className="flex space-x-5">
										<div className="bg-custom-light-yellow rounded-[13px] text-white flex items-center justify-center w-14 h-12">
											<span className="material-symbols-outlined">distance</span>
										</div>
										<div>
											<strong>Choose Destination</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
										</div>
									</li>
									<li className="flex space-x-5">
										<div className="bg-custom-orange rounded-[13px] text-white flex items-center justify-center w-14 h-12">
											<span className="material-symbols-outlined">payments</span>
										</div>
										<div>
											<strong>Make Payment</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
										</div>
									</li>
									<li className="flex space-x-5">
										<div className="bg-custom-navy rounded-[13px] text-white flex items-center justify-center w-14 h-12">
											<span className="material-symbols-outlined">event_available</span>
										</div>
										<div>
											<strong>Reach Airport on Selected Date</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
										</div>
									</li>
								</ul>
							</div>
							<div className="pr-20 pt-20 relative">
								<span className="w-[354px] h-[367px] block bg-custom-blue/50 rounded-full blur-[70px] absolute top-5 right-10"></span>
								<div className="absolute top-48 -right-14 bg-white rounded-2xl shadow-[0px_30px_70px_-25px_rgba(0,0,0,0.2)] w-[263px] z-10 p-4 flex space-x-5">
									<div>
										<figure className="w-[50px] h-[50px] block overflow-hidden rounded-full">
											<Image src="/img/mosque.jpg" width={74} height={66} className="h-[inherit]" alt="Mosque" />
										</figure>
									</div>
									<div className="flex-1">
										<small className="font-sans font-medium text-sm text-custom-body-text-light">Ongoing</small>
										<p className="text-lg font-semibold mb-2">Trip to rome</p>
										<p className="text-base text-custom-body-text font-medium mb-1">
											<span className="text-custom-purple-light">40%</span> completed
										</p>
										<div className="h-[5px] bg-gray-200 rounded-[30px]">
											<span className="w-[40%] block h-full bg-custom-purple-light rounded-[30px]"></span>
										</div>
									</div>
								</div>
								<div className="bg-white shadow-[0px_40px_70px_-35px_rgba(0,0,0,0.2)] rounded-[26px] max-w-[370px] w-full relative py-5 px-6">
									<figure className="max-h-[161px] h-full overflow-hidden rounded-3xl mb-6">
										<Image src="/img/destination.jpg" width={400} height={162} alt="Destination" />
									</figure>
									<div>
										<strong className="text-lg text-custom-black font-semibold mb-3.5 block">Trip To Greece</strong>
										<p className="font-medium font-sans text-base text-custom-body-text-light flex divide-x-[2px] divide-custom-body-text-light leading-4 space-x-3 mb-6">
											<span>14-29 June</span>
											<span className="pl-3">by Robbin joseph</span>
										</p>
										<ul className="flex space-x-3 mb-5">
											<li>
												<div className="w-9 h-9 bg-gray-100 flex items-center justify-center rounded-full text-custom-body-text-light">
													<span className="text-base material-symbols-outlined">eco</span>
												</div>
											</li>
											<li>
												<div className="w-9 h-9 bg-gray-100 flex items-center justify-center rounded-full text-custom-body-text-light">
													<span className="text-base material-symbols-outlined">map</span>
												</div>
											</li>
											<li>
												<div className="w-9 h-9 bg-gray-100 flex items-center justify-center rounded-full text-custom-body-text-light">
													<span className="text-base material-symbols-outlined">near_me</span>
												</div>
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="flex space-x-2 text-custom-body-text-light">
												<span className="text-base material-symbols-outlined">apartment</span>
												<p className="text-base font-sans">24 people going</p>
											</div>
											<div>
												<span className="text-base text-custom-navy material-symbols-outlined">favorite</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Testimonials />
				<section className="py-20">
					<div className="max-w-[1280px] mx-auto px-4 relative">
						<div className="grid grid-cols-5">
							<div className="h-20 p-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 rounded-2xl transition-all hover:shadow-2xl duration-300">
								<Image src="/img/axon.png" className="object-none" fill alt="Client Logo" />
							</div>
							<div className="h-20 p-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 rounded-2xl transition-all hover:shadow-2xl duration-300">
								<Image src="/img/jetstar.png" className="object-none" fill alt="Client Logo" />
							</div>
							<div className="h-20 p-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 rounded-2xl transition-all hover:shadow-2xl duration-300">
								<Image src="/img/expedia.png" className="object-none" fill alt="Client Logo" />
							</div>
							<div className="h-20 p-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 rounded-2xl transition-all hover:shadow-2xl duration-300">
								<Image src="/img/qantas.png" className="object-none" fill alt="Client Logo" />
							</div>
							<div className="h-20 p-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 rounded-2xl transition-all hover:shadow-2xl duration-300">
								<Image src="/img/alitalia.png" className="object-none" fill alt="Client Logo" />
							</div>
						</div>
					</div>
				</section>
				<section className="py-20">
					<div className="max-w-[1280px] mx-auto px-4 relative">
						<div className="flex items-center justify-center relative w-full h-[407px] bg-custom-purple-thin/20 rounded-[20px] rounded-tl-[129px]">
							<article className="max-w-[859px] mx-auto relative">
								<p className="font-sans text-[30px] font-semibold text-center mb-14 text-custom-body-text">Subscribe to get information, latest news and other interesting offers about Cobham</p>
								<div className="flex space-x-5 justify-center h-[68px]">
									<div className="w-full max-w-[421px] h-auto">
										<div className="bg-white flex items-center space-x-3 w-full h-full px-4 rounded-[10px]">
											<span className="material-symbols-outlined text-gray-400">mail</span>
											<input type="text" placeholder="Your email" className="appearance-none focus:outline-none" />
										</div>
									</div>
									<div className="min-w-[180px] h-auto">
										<button className="capitalize w-full h-full rounded-[10px] text-white bg-gradient-to-t from-[#FF7D68] to-[#FF946D]">subscribe</button>
									</div>
								</div>
							</article>
							<span className="absolute w-[350px] h-auto left-5 bottom-0 -z-[1]">
								<Spiral1 className="opacity-[.15]" />
							</span>
							<span className="absolute w-[270px] h-auto right-0 top-0 -z-[1]">
								<Spiral2 className="opacity-[.15]" />
							</span>
							<div className="absolute w-[70px] h-[70px] rounded-full top-0 right-0 transform -translate-y-1/2 translate-x-1/2 bg-gradient-to-tr from-[#5E3BE1] to-[#747DEF] text-white flex items-center justify-center">
								<span className="material-symbols-outlined text-[38px]">near_me</span>
							</div>
						</div>
						<DecorOrnament2 className="ornament-plus2 absolute bottom-0 right-0 transform translate-y-20 translate-x-20" />
					</div>
				</section>
			</main>
			<footer className="pt-16 overflow-hidden relative">
				<div className="max-w-[1280px] mx-auto px-4 relative">
					<div className="flex justify-between">
						<div className="w-2/12">
							<h1 className="capitalize text-[44px] font-medium mb-5">jadoo.</h1>
							<p className="text-custom-body-text">
								<small>Book your trip in minute, get full Control for much longer.</small>
							</p>
						</div>
						<div className="px-4">
							<h3 className="capitalize font-bold text-[21px] mb-[34px]">company</h3>
							<ul className="space-y-2 text-lg font-medium text-custom-body-text">
								<li>
									<Link legacyBehavior href="/about">
										<a className="hover:text-custom-yellow">About</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href="/careers">
										<a className="hover:text-custom-yellow">Careers</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href="/mobile">
										<a className="hover:text-custom-yellow">Mobile</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="px-4">
							<h3 className="capitalize font-bold text-[21px] mb-[34px]">contact</h3>
							<ul className="space-y-2 text-lg font-medium text-custom-body-text">
								<li>
									<Link legacyBehavior href="">
										<a className="hover:text-custom-yellow">Help/FAQ</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href="/press">
										<a className="hover:text-custom-yellow">Press</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href="/affiliates">
										<a className="hover:text-custom-yellow">Affiliates</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="px-4">
							<h3 className="capitalize font-bold text-[21px] mb-[34px]">more</h3>
							<ul className="space-y-2 text-lg font-medium text-custom-body-text">
								<li>
									<Link legacyBehavior href="/airlinefees">
										<a className="hover:text-custom-yellow">Airlinefees</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href="/airline">
										<a className="hover:text-custom-yellow">Airline</a>
									</Link>
								</li>
								<li>
									<Link legacyBehavior href="/lowfaretips">
										<a className="hover:text-custom-yellow">Low fare tips</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="px-4 w-[22%] flex justify-center">
							<div>
								<ul className="text-lg text-gray-500 flex justify-center space-x-5">
									<li>
										<a href="" className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full">
											<span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
											<span className="relative z-20">
												<Fb className="fill-black group-hover:fill-white transition-colors duration-300" />
											</span>
										</a>
									</li>
									<li>
										<a href="" className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full">
											<span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
											<span className="relative z-20">
												<Insta className="fill-black group-hover:fill-white transition-colors duration-300" />
											</span>
										</a>
									</li>
									<li>
										<a href="" className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full">
											<span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
											<span className="relative z-20">
												<Tw className="fill-black group-hover:fill-white transition-colors duration-300" />
											</span>
										</a>
									</li>
								</ul>
								<h6 className="text-xl text-center tracking-tight font-medium text-gray-500 mt-7 mb-3">Discover our app</h6>
								<div className="flex justify-center">
									<span className="flex-1">
										<Link legacyBehavior href="/">
											<a>
												<Image src="/img/google-play.png" className="object-none" width={300} height={200} alt="Google Play" />
											</a>
										</Link>
									</span>
									<span className="flex-1">
										<Link legacyBehavior href="/">
											<a>
												<Image src="/img/play-store.png" className="object-none" width={300} height={200} alt="Play Store" />
											</a>
										</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="py-16">
					<p className="text-center text-custom-body-text">
						<small className="text-[#727272]">
							All rights{" "}
							<Link legacyBehavior href="mailto:reserved@jadoo.co">
								<a>reserved@jadoo.co</a>
							</Link>
						</small>
					</p>
				</div>
				<span className="w-[479px] h-[497px] block bg-custom-purple/50 rounded-full blur-[70px] absolute -bottom-[300px] -right-[300px]"></span>
			</footer>
		</>
	);
}
