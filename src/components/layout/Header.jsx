import { useEffect, useState } from "react";
import FancyHeader from "../ui/FancyHeader";
import Logo from "../ui/Logo";


export default function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <FancyHeader $isTop={isTop}>
      <Logo/>
      <h1>Fairstofft!</h1>
    </FancyHeader>
  );
}
