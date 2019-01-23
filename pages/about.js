import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const AboutView = dynamic(() => import("@/views/about"));

const About = () => <AboutView />;

export default About;
