import { useState } from 'react';
import './SkyscannerApp.css';

export default function SkyscannerApp() {
  const [selectedDate, setSelectedDate] = useState('2026-08-15');
  const [returnDate, setReturnDate] = useState('2026-08-22');
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 7, 1)); // August 2026

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleDateClick = (dayNum) => {
    const monthStr = String(currentMonth.getMonth() + 1).padStart(2, '0');
    const dayStr = String(dayNum).padStart(2, '0');
    const formatted = `${currentMonth.getFullYear()}-${monthStr}-${dayStr}`;

    if (!selectedDate || (selectedDate && returnDate)) {
      setSelectedDate(formatted);
      setReturnDate('');
    } else if (selectedDate && !returnDate) {
      if (new Date(formatted) < new Date(selectedDate)) {
        setSelectedDate(formatted);
      } else {
        setReturnDate(formatted);
      }
    }
  };

  const isSelected = (dayNum) => {
    const monthStr = String(currentMonth.getMonth() + 1).padStart(2, '0');
    const dayStr = String(dayNum).padStart(2, '0');
    const formatted = `${currentMonth.getFullYear()}-${monthStr}-${dayStr}`;
    return formatted === selectedDate || formatted === returnDate;
  };

  const isInRange = (dayNum) => {
    if (!selectedDate || !returnDate || !isRoundTrip) return false;
    const monthStr = String(currentMonth.getMonth() + 1).padStart(2, '0');
    const dayStr = String(dayNum).padStart(2, '0');
    const formatted = `${currentMonth.getFullYear()}-${monthStr}-${dayStr}`;
    return new Date(formatted) > new Date(selectedDate) && new Date(formatted) < new Date(returnDate);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleContinue = () => {
    setBookingConfirmed(true);
  };

  return (
    <div className="bpk-container glass-card">
      <div className="bpk-badge-wrapper">
        <span className="bpk-badge">Forage Job Simulation • Task 1</span>
        <span className="bpk-tech-tag">Backpack React Design System</span>
      </div>

      {/* Required Header Text */}
      <h2 className="bpk-header-title" id="flight-schedule-heading">
        ✈️ Flight Schedule
      </h2>
      <p className="bpk-subtitle">
        Interactive flight date selector built with Skyscanner's Backpack React UI library specifications.
      </p>

      {/* Flight Type Selector */}
      <div className="bpk-trip-type">
        <button
          className={`bpk-chip ${isRoundTrip ? 'bpk-chip--active' : ''}`}
          onClick={() => setIsRoundTrip(true)}
          type="button"
        >
          Roundtrip
        </button>
        <button
          className={`bpk-chip ${!isRoundTrip ? 'bpk-chip--active' : ''}`}
          onClick={() => { setIsRoundTrip(false); setReturnDate(''); }}
          type="button"
        >
          One-way
        </button>
      </div>

      {/* Backpack Calendar Component */}
      <div className="bpk-calendar-card">
        <div className="bpk-calendar-header">
          <button className="bpk-calendar-nav" onClick={handlePrevMonth} type="button" aria-label="Previous Month">
            ‹
          </button>
          <span className="bpk-calendar-month">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button className="bpk-calendar-nav" onClick={handleNextMonth} type="button" aria-label="Next Month">
            ›
          </button>
        </div>

        <div className="bpk-calendar-grid">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="bpk-calendar-day-head">{day}</div>
          ))}

          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={`empty-${i}`} className="bpk-calendar-day bpk-calendar-day--empty" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const selected = isSelected(dayNum);
            const inRange = isInRange(dayNum);
            return (
              <button
                key={dayNum}
                type="button"
                className={`bpk-calendar-day ${selected ? 'bpk-calendar-day--selected' : ''} ${inRange ? 'bpk-calendar-day--in-range' : ''}`}
                onClick={() => handleDateClick(dayNum)}
              >
                {dayNum}
              </button>
            );
          })}
        </div>

        {/* Selected Dates Display */}
        <div className="bpk-dates-summary">
          <div className="bpk-date-box">
            <span className="bpk-date-label">Departure</span>
            <span className="bpk-date-val">{selectedDate || 'Select Date'}</span>
          </div>
          {isRoundTrip && (
            <div className="bpk-date-box">
              <span className="bpk-date-label">Return</span>
              <span className="bpk-date-val">{returnDate || 'Select Date'}</span>
            </div>
          )}
        </div>
      </div>

      {/* Required Backpack Button saying 'Continue' */}
      <div className="bpk-actions">
        <button
          type="button"
          className="bpk-button-continue"
          id="bpk-continue-btn"
          onClick={handleContinue}
          disabled={!selectedDate}
        >
          Continue
        </button>
      </div>

      {/* Confirmation Modal/Notice */}
      {bookingConfirmed && (
        <div className="bpk-confirmation-toast">
          <div className="bpk-toast-content">
            <span className="bpk-toast-icon">✅</span>
            <div>
              <h4 className="bpk-toast-title">Flight Schedule Selected!</h4>
              <p className="bpk-toast-text">
                Departure: <strong>{selectedDate}</strong> {isRoundTrip && returnDate ? `| Return: ${returnDate}` : ''}
              </p>
            </div>
            <button className="bpk-toast-close" onClick={() => setBookingConfirmed(false)} type="button">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
