"use client";
import React from "react";
import PixelgradeSection from "@/component/organism/PixelGradeSection";
import Navbar from "../component/molecule/navbar";
import Logo from "@/component/atom/logo";
import FeatureCard from "@/component/organism/FeatureCard";
import HeroSection from "@/component/organism/HeroSection";
import FadeInWhenVisible from "@/component/organism/FadeInWhenVisible";
import CustomerTestimonial from "@/component/organism/CustomerTestimonial";
import FooterPromo from "@/component/organism/FooterPromo";
import Layout from "@/component/template/layout";
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Layout>
        <FadeInWhenVisible>
          <HeroSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Logo />
        </FadeInWhenVisible>
        {/* Features Section */}
        <FadeInWhenVisible>
          <section className="container mx-auto text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900">
              Manage your entire community in a single system
            </h2>
            <p className="text-gray-500">Who is Nexcent suitable for?</p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <FeatureCard
                imageSrc="/member(2).png"
                alt="Membership"
                title="Membership Organisations"
                description="Our membership management software provides full automation of membership renewals and payments."
              />
              <FeatureCard
                imageSrc="/member(1).png"
                alt="National Associations"
                title="National Associations"
                description="Our membership management software provides full automation of membership renewals and payments."
              />
              <FeatureCard
                imageSrc="/Member.png"
                alt="Clubs and Groups"
                title="Clubs And Groups"
                description="Our membership management software provides full automation of membership renewals and payments."
              />
            </div>
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <PixelgradeSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <CustomerTestimonial />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <PixelgradeSection />
        </FadeInWhenVisible>
      </Layout>
    </div>
  );
}
