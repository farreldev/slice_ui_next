import React from "react";

import Link from "next/link";
import LogoImg from "@/images/logo.svg";
export default function Header() {
	return (
		<header className="absolute top-0 z-10 w-full py-12">
			<div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
				<div>
					<a href="" className="w-32">
						<LogoImg className="logo-style" />
					</a>
				</div>
				<div className="w-auto">
					<ul className="flex items-center space-x-5">
						<li>
							<Link legacyBehavior href="/destination">
								<a className="capitalize px-9 text-gray-800 font-medium">destination</a>
							</Link>
						</li>
						<li>
							<Link legacyBehavior href="/hotels">
								<a className="capitalize px-9 text-gray-800 font-medium">hotels</a>
							</Link>
						</li>
						<li>
							<Link legacyBehavior href="/flights">
								<a className="capitalize px-9 text-gray-800 font-medium">flights</a>
							</Link>
						</li>
						<li>
							<Link legacyBehavior href="/bookings">
								<a className="capitalize px-9 text-gray-800 font-medium">bookings</a>
							</Link>
						</li>
						<li>
							<Link legacyBehavior href="/login">
								<a className="capitalize px-9 text-gray-800 font-medium">login</a>
							</Link>
						</li>
						<li>
							<Link legacyBehavior href="/signup">
								<a className="capitalize px-5 py-1 border border-gray-800 rounded-sm mx-3 text-gray-800 font-medium">signup</a>
							</Link>
						</li>
						<li>
							<button className="px-5 text-gray-800 relative font-bold">
								EN
								<span className="absolute w-2 h-2 border-gray-800 border-b border-r rotate-45 top-1 right-0"></span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
