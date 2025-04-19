import React from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
	return (
		<footer className="bg-black/30 border-t border-white/5 py-12">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
					<div className="space-y-4">
						<Link to="/" className="text-xl font-bold text-white block">
							ONE<span className="text-primary">BUILD</span>
						</Link>
						<p className="text-sm text-white/60">Project management solution designed specifically for builders and construction professionals.</p>
					</div>

					<div>
						<h4 className="text-sm font-semibold uppercase text-white/80 mb-4">Company</h4>
						<ul className="space-y-3">
							<li>
								<a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
									About Us
								</a>
							</li>

							<li>
								<Link to="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-semibold uppercase text-white/80 mb-4">Resources</h4>
						<ul className="space-y-3">
							<li>
								<a href="https://b.otbapps.com/signIn" className="text-sm text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
									Sign In
								</a>
							</li>
							<li>
								<a href="https://b.otbapps.com/signUp" className="text-sm text-white/60 hover:text-white transition-colors">
									Create Account
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-semibold uppercase text-white/80 mb-4">Download</h4>
						<div className="flex flex-col space-y-3">
							<a href="https://apps.apple.com/app/id6449942716" className="transition-transform hover:scale-105 w-36">
								<img
									src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
									alt="Download on the App Store"
									className="w-full h-12 object-scale-down"
								/>
							</a>
							<a href="https://play.google.com/store/apps/details?id=co.simon.bottletree&pli=1" className="transition-transform hover:scale-105 w-36">
								<img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="w-full h-12 object-contain" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-white/40">© {new Date().getFullYear()} ONEBUILD by OTBApps Pty Ltd. All rights reserved.</p>
					<div className="mt-4 md:mt-0 flex space-x-6"></div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
