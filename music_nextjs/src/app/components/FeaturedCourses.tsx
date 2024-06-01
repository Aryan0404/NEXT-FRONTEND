"use client";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function FeaturedCourses() {
  const FeaturedCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-10 min-h-screen  bg-gray-900 ">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-white ">
          Learn with the best
        </p>
      </div>
      <div className="grid grid-cols-1 justify-center mx-5 sm:grid-cols-2 gap-8 lg:grid-cols-3  mt-8">
        {FeaturedCourses.map((course: Course) => (
          <BackgroundGradient className="rounded-[22px] min-w-full min-h-full  p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
            <div
              key={course.id}
              className="flex  justify-center flex-col items-center p-2 sm:p-6 "
            >
              <p className="text-center mb-4 font-semibold text-teal-600 mt-2">
                {course.title}
              </p>
              <p>{course.description}</p>
              <Link href={`${course.slug}`}>
                <p className="text-center mt-2">Learn more</p>
              </Link>
            </div>
          </BackgroundGradient>
        ))}
      </div>
      <div className="text-center mt-20 ">
        <Link href={"/courses"}>View all courses</Link>
      </div>
    </div>
  );
}
