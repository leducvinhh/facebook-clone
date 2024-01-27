import Footer from '~/components/Footer'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
