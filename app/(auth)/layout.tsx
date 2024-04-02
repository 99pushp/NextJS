export default function signinlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
          <div>20% off signin & signup</div>
          {children}
     </div>
    );
  }