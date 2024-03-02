import { Inter, Manrope } from "next/font/google";
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

export const hanken_grotesk = Hanken_Grotesk({ subsets: ["latin"] });
export const manrope = Manrope({ subsets: ["latin"] });
export const ibm_plex_mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
