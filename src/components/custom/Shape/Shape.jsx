export default function Shape({ ...props }) {
  return (
    <svg viewBox="0 0 1601 1194" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g opacity="0.2" filter="url(#filter0_f_2035_2)">
            <path d="M1492.24 777.19C1432.27 1006.97 1073.91 1112.41 691.825 1012.69C309.742 912.967 48.6178 645.847 108.591 416.063C168.564 186.278 526.924 80.8416 909.007 180.564C1291.09 280.286 1552.21 547.406 1492.24 777.19Z" fill="url(#paint0_radial_2035_2)"/>
        </g>
        <defs>
            <filter id="filter0_f_2035_2" x="10.0191" y="52.9572" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_2035_2"/>
            </filter>
            <radialGradient id="paint0_radial_2035_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(800.416 596.626) rotate(104.628) scale(430 715)">
                <stop offset="0.215" stop-color="#8140FC"/>
                <stop offset="0.585" stop-color="#C566D7"/>
                <stop offset="1" stop-color="#F5F5F5"/>
            </radialGradient>
        </defs>
    </svg>
  );
}
