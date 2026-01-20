import Image from "next/image";
import Link from "next/link";
import Hero from "./component/Hero";
import Recruit from "./component/Recruit";
import Topwrapper from "./component/Topwrapper";
import { Children } from "react";
import Store from "./component/Store";
import DomeGallery from "./component/DomeGallery";
import SNSGrid from "./component/SNSGrid";

export default function Home() {
  return (
    <main className="bg-white w-full  min-h-screen items-center justify-center font-sans">

      <Hero />
      <Topwrapper />
      <Store />
      <div style={{ width: '100vw', height: '100vh' }}>
        <DomeGallery />
      </div>
      <Recruit />
      <SNSGrid/>
    </main>
  );
}
