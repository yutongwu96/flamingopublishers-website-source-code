const Footer = () => {
  return (
    <footer
      className="w-full text-center text-sm pt-100 border-t mt-30"
      style={{
        fontFamily: "Delius, sans-serif",
        textAlign: 'center',  // explicitly add this to confirm centering
        width: '100%',        // explicit full width
      }}
    >
      © Flamingo Publishers LLC
    </footer>
  );
};

export default Footer;
