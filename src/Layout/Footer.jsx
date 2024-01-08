function Footer() {
  return (
    <footer className="h-20 w-full bg-secondaryColor flex justify-center items-center mt-10 lg:mt-0">
      <h3 className="font-semibold text-center">
        © {new Date().getFullYear()} Md Abdullah, Inc. All rights reserved.
      </h3>
    </footer>
  );
}

export default Footer;
