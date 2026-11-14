import React from "react";

// 한 페이지에서 예외가 나도 사이트 전체가 언마운트되어 백지가 되지 않도록 감싸는 경계입니다.
// resetKey(=현재 경로)가 바뀌면 자동으로 상태를 초기화해 다른 페이지로는 계속 이동할 수 있습니다.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // 콘솔에는 남기되 화면은 안내 문구로 대체합니다.
    console.error("Page error:", error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <section
        className="error-boundary"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "18px",
          padding: "40px 20px",
          background: "#000",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: 700 }}>
          페이지를 표시하지 못했습니다
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            opacity: 0.7,
            maxWidth: "520px",
            wordBreak: "keep-all",
          }}
        >
          일부 데이터를 불러오는 중 문제가 생겼습니다. 새로고침하거나 홈으로
          이동해 다시 시도해 주세요.
        </p>
        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          <a
            href="/"
            style={{
              padding: "10px 24px",
              border: "1px solid #fff",
              borderRadius: "50px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            홈으로
          </a>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 24px",
              border: "1px solid #fff",
              borderRadius: "50px",
              background: "#fff",
              color: "#000",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            새로고침
          </button>
        </div>
      </section>
    );
  }
}

export default ErrorBoundary;
