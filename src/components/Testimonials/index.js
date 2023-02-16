import React from "react";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { A11y, Autoplay, EffectCreative, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testiItems = [
	{
		id: "1",
		desc: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next JS",
		image: "mike.jpg",
		author: "Mike Taylor",
		role: "Lahore, Pakistan",
	},
	{
		id: "2",
		desc: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next JS",
		image: "yein.jpg",
		author: "Yein Narayana",
		role: "Nganu, Buleleng",
	},
	{
		id: "3",
		desc: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next JS",
		image: "nguyen.jpg",
		author: "Nguyen hCong",
		role: "Sumenep, East Java",
	},
];
export default function Testimonials() {
	const [realSlide, setRealSlide] = useState(0);
	const swiper = useRef(null);

	const fnPrev = useCallback(() => {
		if (realSlide > 0) swiper?.current?.slidePrev();
	}, [swiper, realSlide]);

	const fnNext = useCallback(() => {
		if (realSlide < testiItems.length) swiper?.current?.slideNext();
	}, [swiper, realSlide]);
	return (
		<section className="py-16">
			<div className="max-w-[1280px] mx-auto px-4 relative">
				<div className="flex w-full justify-between space-x-5">
					<div className="max-w-[calc(90%/2)]">
						<h3 className="uppercase font-sans font-semibold text-lg text-custom-body-text">Testimonials</h3>
						<h2 className="font-serif text-[50px] capitalize mb-8">What people say about Us.</h2>
						<ul className="flex space-x-5">
							{testiItems.map((testi, i) => {
								return <li key={i} className={["w-2 h-2 rounded-full", i === realSlide ? "bg-gray-800" : "bg-gray-300"].join(" ")} onClick={() => i !== realSlide && swiper?.current?.slideTo(i)}></li>;
							})}
						</ul>
					</div>
					<div className="w-6/12 flex items-center justify-center relative">
						<div className="absolute -inset-10 -top-20">
							<Swiper
								modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative]}
								spaceBetween={50}
								slidesPerView={1}
								effect="creative"
								creativeEffect={{
									prev: {
										translate: [60, 70, 0],
									},
									next: {
										translate: ["-100%", "-100%", 0],
									},
								}}
								simulateTouch={false}
								onSlideChange={(s) => setRealSlide(s.realIndex)}
								onSwiper={(s) => {
									swiper.current = s;
								}}
							>
								{testiItems.map((item) => {
									return (
										<SwiperSlide key={item.id}>
											<div className="relative px-32 pt-20 pb-48">
												<div className="relative">
													<div className="bg-white shadow-[0px_40px_70px_-35px_rgba(0,0,0,0.2)] rounded-xl p-6 relative z-20">
														<span className="w-12 h-12 absolute top-0 left-0 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-full flex-none mr-3">
															<Image src={`/img/${item.image}`} width={68} height={68} alt="" />
														</span>
														<p className="text-gray-500 mb-6">{item.desc}</p>
														<strong className="block text-gray-900">{item.author}</strong>
														<small className="text-gray-500">{item.role}</small>
													</div>
												</div>
											</div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>
					<div className="w-1/12 flex items-center justify-center">
						<div className="flex flex-col">
							<button onClick={fnPrev} className={[realSlide === 0 ? "text-gray-300" : "text-gray-800"].join(" ")}>
								<span class="material-symbols-outlined">keyboard_arrow_up</span>
							</button>
							<button onClick={fnNext} className={[realSlide === testiItems.length - 1 ? "text-gray-300" : "text-gray-800"].join(" ")}>
								<span class="material-symbols-outlined">keyboard_arrow_down</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
