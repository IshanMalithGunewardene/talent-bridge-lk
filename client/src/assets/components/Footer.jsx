import React from 'react';

function Footer() {
    return (
        //Main wrapper
        <footer className="w-full bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-200 bottom-0 grow">
            {/*content wrapper*/}
            <div className="mx-auto max-w-6xl px-6 py-14">
                {/*top section*/}
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/*social media and follow us section*/}
                    <div>
                        <h3 className="text-lg font-semibold">Follow us on social media</h3>
                        <div className="mt-4 flex items-center gap-4">
                            {/*Facebook icons with hover effects*/}
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15 hover:ring-white/20"
                            >
                                <svg
                                    width="1000px"
                                    height="1000px"
                                    viewBox="0 0 24 24"
                                    className="block h-9 w-9"
                                >
                                    <path
                                        d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </a>
                            {/*Linkedin icons with hover effects*/}
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15 hover:ring-white/20"
                            >
                                <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    className="block h-9 w-9"
                                >
                                    <path
                                        d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </a>
                            {/*Instergram icons with hover effects*/}
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15 hover:ring-white/20"
                            >
                                <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    className="block h-9 w-9"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </a>
                            {/*Discord icons with hover effects*/}
                            <a
                                href="#"
                                aria-label="Discord"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15 hover:ring-white/20"
                            >
                                <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    className="block h-9 w-9"
                                >
                                    <path
                                        d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </a>
                            {/*Whatsapp icons with hover effects*/}
                            <a
                                href="#"
                                aria-label="Whatsapp"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15 hover:ring-white/20"
                            >
                                <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    className="block h-9 w-9"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/*Navigration links section*/}
                    <div className="grid grid-cols-2 gap-x-16 gap-y-10 text-sm md:text-base">
                        <div className="space-y-3">
                            <a href="/" className="block text-slate-200/90 hover:text-white">
                                Home
                            </a>
                            <a href="/jobs" className="block text-slate-200/90 hover:text-white">
                                Jobs/Interns
                            </a>
                            <a href="/login" className="block text-slate-200/90 hover:text-white">
                                Login
                            </a>
                            <a href="/faq" className="block text-slate-200/90 hover:text-white">
                                Faq
                            </a>
                            <a href="/sitemap" className="block text-slate-200/90 hover:text-white">
                                Site map
                            </a>
                        </div>
                        <div className="space-y-3">
                            <a href="#" className="block text-slate-200/90 hover:text-white">
                                Support
                            </a>
                            <a href="#" className="block text-slate-200/90 hover:text-white">
                                Privacy Policies
                            </a>
                            <a href="#" className="block text-slate-200/90 hover:text-white">
                                Features
                            </a>
                            <a href="#" className="block text-slate-200/90 hover:text-white">
                                Terms and conditions
                            </a>
                        </div>
                    </div>
                </div>
                {/*bottom copyright section*/}
                <div className="mt-20 text-center text-sm text-slate-300/80">
                    {'\u00A9'} Talent Bridge LK {new Date().getFullYear()} All right revered
                </div>
            </div>
        </footer>
    );
}

export default Footer;
