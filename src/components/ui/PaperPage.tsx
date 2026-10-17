import "./paper-page.css";

/** The notebook-paper sheet every page sits on, with its binder rings. */
export function PaperPage({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <main className="paper" id={id}>
      <div className="binderRings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {children}
    </main>
  );
}
