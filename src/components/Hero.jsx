import booksBanner from '../images/books.jpg';
import jennyLin from '../images/jenny-lin-no-background.png';

const Hero = () => {
  const handleLearnMore = () => {
    const booksSection = document.getElementById('books');
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >
      <img
        src={booksBanner}
        alt="Books Banner"
        style={{
          width: '100%',
          height: '550px',
          display: 'block',
          borderRadius: '50px',
          objectFit: 'cover',
        }}
      />
      <img
        src={jennyLin}
        alt="Jenny Lin"
        style={{
          position: 'absolute',
          top: '30%',
          left: '60%',
          transform: 'translate(-50%, 0)',
          height: '150px',
          zIndex: 2,
          maxWidth: '40vw',
          width: 'auto',
        }}
      />
      {/* Smooth scroll button below Jenny Lin */}
      <button
        onClick={handleLearnMore}
        style={{
          position: 'absolute',
          top: 'calc(30% + 170px)',
          left: '60%',
          transform: 'translate(-50%, 0)',
          zIndex: 3,
          background: '#f56876',
          color: 'white',
          padding: '12px 32px',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          transition: 'background 0.2s',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Verdana, Geneva, sans-serif', // <-- add this line
          fontSize: "1rem",
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default Hero;
