"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Ttabs = "organize" | "hired" | "manage";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState<Ttabs>("organize");

  return (
    <section className="border-t bg-white py-16 h-[90vh]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/*The Tabs*/}
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={() => setActiveTab("organize")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"}`}
            >
              Organized Applications
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"}`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab("manage")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "manage" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"}`}
            >
              Manage Boards
            </Button>
          </div>
          {/*Here, we have the src as the file path as public is the root by default*/}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {activeTab === "organize" && (
              <Image
                src={"/hero-images/hero1.png"}
                alt="Organize Job Applications"
                width={1200}
                height={800}
              />
            )}
            {activeTab === "hired" && (
              <Image
                src={"/hero-images/hero2.png"}
                alt="Organize Job Applications"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "manage" && (
              <Image
                src={"/hero-images/hero3.png"}
                alt="Organize Job Applications"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
