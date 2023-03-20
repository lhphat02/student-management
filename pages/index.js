import { Accordion } from 'flowbite-react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quản lý học sinh</title>
        <meta name="description" content="Trang web quản lý học sinh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Hello there</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Chạy code không lỗi là thành công một nửa rồi 🙌.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Giờ thì ngồi nghiên cứu thử structure ban đầu website của team
                nha ae.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>UI có cần design figma không ?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Không nha 😥 tốn thời gian lắm.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Làm tới đâu thì design tới đó.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Bắt đầu từ đâu ?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Ae vào package.son nhìn những cái package mà mình đang sử dụng
                nha.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Liên quan tới phần ai làm thì ngồi tự tìm Docs của phần đó đọc.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                T up mấy cái docs lên trello sau nha 😏. Nói chung môn này làm
                đơn giản thôi không cần cầu kì đâu ae.
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://nextjs.org/docs/getting-started"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Next.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://flowbite.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Flowbite - Tailwind Plugin
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </main>
    </>
  );
}
