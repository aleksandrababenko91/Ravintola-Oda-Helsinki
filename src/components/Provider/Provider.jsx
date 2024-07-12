'use client'
import { usePathname } from "@/navigation";
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';


export default function LayoutProvider({children}) {
  const pathname = usePathname()

  return (
    <div className="wrapper">

          <Header />
          {children}
          <Footer />


    </div>
  )
}