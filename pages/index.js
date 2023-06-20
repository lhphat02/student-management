import React from 'react';
// import { ThemeProvider } from 'next-themes';

import Topbar from '../components/Topbar';
import Button from '../components/Button';
import MyCarousel from '../components/Carousel';
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';
import { useEffect, useState, useMemo } from 'react';

export default function Home() {
  const router = useRouter();

  // console.log(hocsinh)
  return (
    <main className="min-h-screen ">
      <div>
        <Topbar NamePage="Trang chủ" />

        {/* <MyCarousel /> */}

        <div aria-label="group cards" class="py-10 w-full bg-gray-50">
          <div class="lg:flex items-center justify-center w-full">
            <div
              aria-label="card 1"
              class="lg:w-1/3 lg:mr-7 lg:mb-0 mb-7 bg-white dark:bg-gray-800  p-6 shadow rounded"
            >
              <a href="/student-manager">
                <div class="flex items-center border-b border-gray-200 dark:border-gray-700  pb-6">
                  <div class="flex items-start justify-between w-full">
                    <div class="pl-3 w-full">
                      <p class="text-xl font-medium text-gray-800 dark:text-white text-center">
                        Danh sách học sinh
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-2">
                  <p class="text-sm py-4 text-gray-600 dark:text-gray-200 ">
                    Tra cứu danh sách thông tin các học sinh của các lớp
                  </p>
                </div>
              </a>
            </div>
            <div
              aria-label="card 2"
              class="lg:w-1/3 lg:mr-7 lg:mb-0 mb-7 bg-white dark:bg-gray-800  p-6 shadow rounded"
            >
              <a href="/class">
                <div class="flex items-center border-b border-gray-200 dark:border-gray-700  pb-6">
                  <div class="flex items-start justify-between w-full">
                    <div class="pl-3 w-full">
                      <p class="text-xl font-medium text-gray-800 dark:text-white text-center">
                        Danh sách lớp
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-2">
                  <p class="text-sm py-4 text-gray-600 dark:text-gray-200 ">
                    Tra cứu thông tin danh sách lớp, tạo năm học mới
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="lg:flex items-center justify-center w-full mt-7">
            <div
              aria-label="card 3"
              class="lg:w-1/3 lg:mr-7 lg:mb-0 mb-7 bg-white dark:bg-gray-800  p-6 shadow rounded"
            >
              <a href="/report">
                <div class="flex items-center border-b border-gray-200 dark:border-gray-700  pb-6">
                  <div class="flex items-start justify-between w-full">
                    <div class="pl-3 w-full">
                      <p class="text-xl font-medium text-gray-800 dark:text-white text-center">
                        Tổng kết cuối kỳ
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-2">
                  <p class="text-sm py-4 text-gray-600 dark:text-gray-200 ">
                    Các báo cáo tổng kết cuối kỳ, báo cáo tổng kết môn học học
                    kỳ
                  </p>
                </div>
              </a>
            </div>
            <div
              aria-label="card 4"
              class="lg:w-1/3 lg:mr-7 lg:mb-0 mb-7 bg-white dark:bg-gray-800  p-6 shadow rounded"
            >
              <a href="/grade">
                <div class="flex items-center border-b border-gray-200 dark:border-gray-700  pb-6">
                  <div class="flex items-start justify-between w-full">
                    <div class="pl-3 w-full">
                      <p class="text-xl font-medium text-gray-800 dark:text-white text-center">
                        Bảng điểm môn học
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-2">
                  <p class="text-sm py-4 text-gray-600 dark:text-gray-200 ">
                    Tra cứu và nhập bảng điểm môn học học sinh
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div class="container px-5 py-24 mx-auto max-w-7x1">
            <div class="flex flex-wrap w-full mb-4 p-4">
              <div class="w-full mb-6 lg:mb-0">
                <h1 class="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
                  Tin Tức
                </h1>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-white p-6 rounded-lg">
                  <a href="">
                    <img
                      class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                      src="https://www.uit.edu.vn/sites/vi/files/image_from_word/350472622_254647147228477_6821491635830565641_n.jpg"
                      alt=""
                    />
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      Thư viện UIT năm 2023 có những gì?
                    </h2>
                    <p class>
                      Chào mừng các bạn sinh viên đến với video giới thiệu Thư
                      viện Trường Đại học Công nghệ Thông tin (Thư viện UIT)!
                      Nhằm giúp các bạn sinh viên hiểu hơn về Thư viện và các
                      thông tin hữu ích để khai thác...
                    </p>
                  </a>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-white p-6 rounded-lg">
                  <a href="">
                    <img
                      class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                      src="https://www.uit.edu.vn/sites/vi/files/styles/uit_thumb/public/uploads/images/thumbs/202306/cong_2.jpeg?itok=hQLK5b3c"
                      alt=""
                    />
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      Thông báo địa điểm mới đào tạo Sau Đại học trường Đại học
                      Công nghệ Thông tin{' '}
                    </h2>
                    <p class>
                      Kính gửi quý Anh/Chị Học viên, Trường Đại học Công nghệ
                      Thông tin thông báo về địa điểm hoạt động mới của Phòng
                      SĐH và TT CITD. Hiện đã chính thức hoạt động bên địa chỉ
                      Số 7-9 Nguyễn Bỉnh Khiêm,...
                    </p>
                  </a>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-white p-6 rounded-lg">
                  <a href="">
                    <img
                      class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                      src="https://www.uit.edu.vn/sites/vi/files/styles/uit_thumb/public/uploads/images/thumbs/202306/de.jpg?itok=DsfzZLtQ"
                      alt=""
                    />
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      Những lưu ý khi tham gia Lễ tốt nghiệp đợt 1 - 2023
                    </h2>
                    <p>
                      Lịch tổ chức lễ tốt nghiệp Buổi sáng ngày 08/06/2023: Lễ
                      trao bằng Thạc sĩ các ngành: Khoa học Máy tính, Công nghệ
                      Thông tin, Hệ thống Thông tin Lễ trao bằng kỹ sư, cử nhân
                      khác khoa: Khoa...
                    </p>
                  </a>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-white p-6 rounded-lg">
                  <a href="">
                    <img
                      class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                      src="https://www.uit.edu.vn/sites/vi/files/styles/uit_thumb/public/uploads/images/thumbs/202306/22f7720b-ce3d-4f1a-8e63-648329d96d55.jpeg?itok=ZfRXIRro"
                      alt=""
                    />
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      Trại hè huấn luyện thuật toán “UIT ALGO BOOTCAMP 2023”
                    </h2>
                    <p class>
                      Với mục đích bồi dưỡng, trao đổi kinh nghiệm và nâng cao
                      kiến thức, phương pháp, kỹ năng làm bài cũng như cập nhật
                      các kiến thức MỚI NHẤT về chiến thuật giải bài, phương
                      pháp tư duy thi đấu lập trình...
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
