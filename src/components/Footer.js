import Navbar from '@components/Navbar'

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-12">
      <div className="w-10/12 2xl:w-8/12 mx-auto flex">
        <div className="w-6/12 pr-30 text-sm">
          <img className="mb-9" src="/img/shared/desktop/logo.svg" alt="logo" />
          <p className="mb-20 font-extralight text-white text-opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <h3 className="font-bold text-white text-opacity-50">
            Copyright 2021. All Rights Reserved
          </h3>
        </div>
        <div className="w-6/12 text-white flex flex-col items-end">
          <Navbar />
          <ul className="flex justify-end mt-40">
            <li className="mr-4">
              <img src="/img/shared/desktop/icon-facebook.svg" alt="facebook" />
            </li>
            <li className="mr-4">
              <img
                src="/img/shared/desktop/icon-instagram.svg"
                alt="instagram"
              />
            </li>
            <li>
              <img src="/img/shared/desktop/icon-twitter.svg" alt="twitter" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
