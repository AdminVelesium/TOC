export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          minWidth: 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span
            style={{
              fontSize: "1.65rem",
              fontWeight: "600",
              color: "#1f2937",
              lineHeight: "1.1",
              whiteSpace: "nowrap",
              marginLeft: "-8vw",
              marginTop: "1vh",
              cursor: "pointer",
            }}
          >
            Talent on <span style={{ color: "#6CCED5" }}>Cloud</span>
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              color: "#6b7280",
              fontWeight: "400",
              marginBottom: "2px",
              whiteSpace: "nowrap",
            }}
          >
            powered by
          </span>
        </div>
        <img
          src="https://i.ibb.co/SDgt4CsH/dyn.jpg"
          alt="Talent on Cloud"
          style={{
            width: "130px",
            height: "35px",
            objectFit: "cover",
            marginLeft: "-10px",
            marginTop: "5vw",
          }}
        />
      </div>
    </div>
  )
}
