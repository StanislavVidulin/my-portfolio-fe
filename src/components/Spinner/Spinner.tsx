export default function Spinner() {
  return (
    <>
      <style>{`
        @keyframes spinner-rotate {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          border: "4px solid rgba(0,0,0,0.1)",
          borderLeftColor: "rgb(28, 8, 106)",
          animation: "spinner-rotate 1s linear infinite",
        }}
      />
    </>
  );
}
