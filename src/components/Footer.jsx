const Footer = () => {
  return (
    <footer
      className="w-full text-center text-sm pt-100 border-t mt-30"
      style={{
        fontFamily: "Delius, sans-serif",
        textAlign: 'center',
        width: '100%',
      }}
    >
      © Flamingo Publishers LLC&nbsp;&nbsp;&nbsp;&nbsp;Contact:{" "}
      <a
        href="mailto:info@flamingopublishers.com"
        style={{ color: "#f56876", textDecoration: "none" }}
      >
        info@flamingopublishers.com
      </a>
    </footer>
  );
};

export default Footer;
