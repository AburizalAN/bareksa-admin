import './style.scss'

const Datenow = () => {
    const d = new Date();
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return (
      <>
        <section className="datenow">
          <div className="container-fluid">
            <div className="date">
                {`${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`}
            </div>
          </div>
        </section>
      </>
    )
}

export default Datenow;