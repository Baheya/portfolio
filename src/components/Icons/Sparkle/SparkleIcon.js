const SparkleIcon = (props) => {
  return (
    <div
      style={{
        color: `${props.primaryColorValue}`,

        zIndex: '3',
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        marginRight: '0.5rem',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    </div>
  );
};

export default SparkleIcon;
