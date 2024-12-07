import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from 'src/components/footer/Footer'

import NavBarFinal from 'src/components/NavBarFinal/NavBarFinal'

const MainLayout = ({
  children,
  showFooter = true,
}: {
  children?: JSX.Element
  showFooter?: boolean
}) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div>
      <NavBarFinal />
      {children}
      {showFooter && <Footer />}
    </div>
  )
}

export default MainLayout
