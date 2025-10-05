export default function Booking() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Book Your Free Strategy Call</h1>
          
          {/* Zeeg inline embed begins */}
          <div 
            className="zeeg-inline-widget bg-white rounded-2xl shadow-lg p-8" 
            id="zeeg-embed-yvonnemueller-consulting-call-with-yvonne" 
            style={{ minWidth: '320px', height: '780px' }}
          />
          <script 
            type="text/javascript" 
            src="https://assets.zeeg.me/embed.min.js" 
            data-user="yvonnemueller" 
            data-event-type="consulting-call-with-yvonne" 
            data-redirect-parent="true" 
            async
          />
          {/* Zeeg inline embed ends */}
        </div>
      </div>
    );
  }