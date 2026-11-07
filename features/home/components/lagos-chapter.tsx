'use client';

import React, { useEffect, useState } from 'react';

const images = {
  hands: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
  lagos: 'https://images.unsplash.com/photo-1577975882846-431adc8c2009?q=80&w=1200&auto=format&fit=crop',
  football: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
  classroom: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop',
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
};

type Photo = {
  className: string;
  src: string;
  alt: string;
};

const photos: Photo[] = [
  {
    className: 'photo photo-birth',
    src: images.hands,
    alt: 'A diverse group of people joining hands',
  },
  {
    className: 'photo photo-lagos-main',
    src: images.lagos,
    alt: 'A black-and-white view across Lagos buildings',
  },
  {
    className: 'photo photo-lagos-detail',
    src: images.lagos,
    alt: 'A closer black-and-white view of Lagos',
  },
  {
    className: 'photo photo-football',
    src: images.football,
    alt: 'A football resting on green grass in warm light',
  },
  {
    className: 'photo photo-classroom',
    src: images.classroom,
    alt: 'Students sitting together in a classroom',
  },
  {
    className: 'photo photo-dubai',
    src: images.dubai,
    alt: 'Dubai skyline at dusk',
  },
];

function PhotoButton({
  photo,
  onOpen,
}: {
  photo: Photo;
  onOpen: (photo: Photo) => void;
}) {
  return (
    <button
      className={photo.className}
      type="button"
      aria-label={`View larger: ${photo.alt}`}
      onClick={() => onOpen(photo)}
    >
      <img src={photo.src} alt={photo.alt} loading="eager" />
    </button>
  );
}

export function LagosChapter() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhoto(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [selectedPhoto]);

  return (
    <section className="relative w-screen h-screen shrink-0 overflow-hidden bg-white flex items-center justify-center select-none">
      <style>{`
        .editorial {
          --unit: min(calc(100vw / 2304), calc(100vh / 1440));
          position: relative;
          width: calc(2304 * var(--unit));
          height: calc(1440 * var(--unit));
          overflow: hidden;
          background: #ffffff;
          color-scheme: light;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #151515;
        }

        .editorial p {
          color: #151515;
        }

        .masthead {
          position: absolute;
          top: calc(122 * var(--unit));
          left: calc(81 * var(--unit));
        }

        .masthead h1 {
          width: calc(540 * var(--unit));
          font-family: var(--font-heading), 'Anton', Arial, sans-serif;
          font-size: calc(135 * var(--unit));
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #151515;
        }

        .masthead p {
          margin-top: calc(24 * var(--unit));
          margin-left: calc(2 * var(--unit));
          width: calc(480 * var(--unit));
          max-width: calc(480 * var(--unit));
          color: #1f1f1f;
          font-family: var(--font-special), 'Instrument Serif', Georgia, serif;
          font-style: italic;
          font-size: calc(25 * var(--unit));
          line-height: 1.35;
        }

        .memory {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: calc(14 * var(--unit));
          color: #151515;
          font-size: calc(22 * var(--unit));
          font-weight: 500;
          line-height: 1.5;
        }

        .memory p {
          color: #151515;
          font-size: calc(22 * var(--unit));
          font-weight: 500;
          line-height: 1.5;
        }

        .memory h2 {
          color: #151515;
          font-family: var(--font-heading), 'Anton', sans-serif;
          font-size: calc(28 * var(--unit));
          font-weight: 700;
          line-height: 1.15;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .memory time {
          display: block;
          margin-top: calc(-6 * var(--unit));
          color: #333330;
          font-size: calc(18 * var(--unit));
          line-height: normal;
          font-family: var(--font-mono), monospace;
        }

        .memory-01 {
          top: calc(165 * var(--unit));
          left: calc(1455 * var(--unit));
          width: calc(360 * var(--unit));
        }

        .memory-03 {
          top: calc(274 * var(--unit));
          left: calc(750 * var(--unit));
          width: calc(348 * var(--unit));
          text-align: right;
        }

        .memory-04 {
          top: calc(985 * var(--unit));
          left: calc(1119 * var(--unit));
          width: calc(520 * var(--unit));
        }

        .memory-05 {
          top: calc(486 * var(--unit));
          left: calc(1953 * var(--unit));
          width: calc(250 * var(--unit));
        }

        .memory-06 {
          top: calc(715 * var(--unit));
          left: calc(81 * var(--unit));
          width: calc(190 * var(--unit));
          text-align: right;
        }

        .memory-06 p {
          font-size: calc(20 * var(--unit));
        }

        .memory-07 {
          top: calc(1116 * var(--unit));
          left: calc(477 * var(--unit));
          width: calc(282 * var(--unit));
          text-align: right;
        }

        .photo {
          position: absolute;
          display: block;
          overflow: hidden;
          border: 0;
          padding: 0;
          background: transparent;
          cursor: zoom-in;
        }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 350ms ease, filter 350ms ease;
        }

        .photo:hover img,
        .photo:focus-visible img {
          transform: scale(1.025);
          filter: contrast(1.03);
        }

        .photo:focus-visible {
          outline: calc(3 * var(--unit)) solid #151515;
          outline-offset: calc(5 * var(--unit));
        }

        .photo-birth {
          top: calc(165 * var(--unit));
          left: calc(1119 * var(--unit));
          width: calc(312 * var(--unit));
          height: calc(300 * var(--unit));
        }

        .photo-lagos-main {
          top: calc(486 * var(--unit));
          left: calc(621 * var(--unit));
          width: calc(477 * var(--unit));
          height: calc(477 * var(--unit));
        }

        .photo-lagos-detail {
          top: calc(651 * var(--unit));
          left: calc(282 * var(--unit));
          width: calc(315 * var(--unit));
          height: calc(312 * var(--unit));
        }

        .photo-football {
          top: calc(486 * var(--unit));
          left: calc(1119 * var(--unit));
          width: calc(477 * var(--unit));
          height: calc(477 * var(--unit));
        }

        .photo-classroom {
          top: calc(486 * var(--unit));
          left: calc(1620 * var(--unit));
          width: calc(312 * var(--unit));
          height: calc(312 * var(--unit));
        }

        .photo-dubai {
          top: calc(985 * var(--unit));
          left: calc(783 * var(--unit));
          width: calc(315 * var(--unit));
          height: calc(303 * var(--unit));
        }

        .closing {
          position: absolute;
          top: calc(1203 * var(--unit));
          left: calc(1119 * var(--unit));
          width: calc(477 * var(--unit));
          font-family: var(--font-special), serif;
          font-style: italic;
          font-size: calc(23 * var(--unit));
          line-height: 1.35;
          color: #151515;
        }

        .lightbox {
          position: fixed;
          z-index: 50;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 6vmin;
          background: rgb(21 21 21 / 92%);
          animation: fade-in 180ms ease-out;
        }

        .lightbox img {
          max-width: min(88vw, 1200px);
          max-height: 84vh;
          object-fit: contain;
          box-shadow: 0 24px 80px rgb(0 0 0 / 35%);
        }

        .lightbox-close {
          position: fixed;
          top: 22px;
          right: 24px;
          border: 1px solid rgb(255 255 255 / 45%);
          padding: 9px 14px;
          color: #ffffff;
          background: rgb(255 255 255 / 8%);
          font-family: var(--font-heading), 'Anton', sans-serif;
          font-size: 14px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .lightbox-close:hover,
        .lightbox-close:focus-visible {
          background: #ffffff;
          color: #151515;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
        }

        @media (max-width: 760px) {
          .editorial {
            display: grid;
            width: 100vw;
            min-height: 100dvh;
            height: auto;
            aspect-ratio: auto;
            overflow: visible;
            padding: 48px 22px 28px;
            grid-template-columns: minmax(0, 1fr);
            gap: 0;
          }

          .masthead,
          .memory,
          .photo,
          .closing,
          .editorial-footer {
            position: static;
            width: 100%;
            height: auto;
          }

          .masthead {
            margin-bottom: 52px;
          }

          .masthead h1 {
            width: 100%;
            font-size: clamp(52px, 16vw, 76px);
            line-height: 0.95;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #151515;
          }

          .masthead p {
            margin: 16px 0 0;
            width: 100%;
            max-width: 100%;
            font-family: var(--font-special), 'Instrument Serif', Georgia, serif;
            font-style: italic;
            font-size: 20px;
            color: #1f1f1f;
            line-height: 1.35;
          }

          .memory {
            gap: 10px;
            margin: 0 0 20px;
            text-align: left;
          }

          .memory p {
            font-size: 16px;
            font-weight: 500;
            color: #151515;
            line-height: 1.5;
          }

          .memory h2 {
            font-size: 20px;
            letter-spacing: 0.02em;
          }

          .memory time {
            margin-top: -4px;
            font-size: 14px;
            color: #333330;
          }

          .photo {
            margin: 0 0 48px;
            aspect-ratio: 4 / 3;
          }

          .photo-birth {
            aspect-ratio: 1 / 1;
          }

          .photo-lagos-main {
            aspect-ratio: 1 / 1;
          }

          .photo-classroom,
          .photo-dubai {
            aspect-ratio: 1 / 1;
          }

          .memory-01 { grid-row: 2; }
          .photo-birth { grid-row: 3; }
          .memory-03 { grid-row: 4; }
          .photo-lagos-main { grid-row: 5; }
          .memory-06 { grid-row: 6; }
          .photo-lagos-detail { grid-row: 8; }
          .photo-football { grid-row: 9; }
          .memory-04 { grid-row: 10; }
          .photo-classroom { grid-row: 11; }
          .memory-05 { grid-row: 12; }
          .memory-07 { grid-row: 13; }
          .photo-dubai { grid-row: 14; }

          .closing {
            grid-row: 15;
            margin: 6px 0 84px;
            font-size: 22px;
            line-height: 1.35;
          }
        }
      `}</style>

      <main className="editorial" data-node-id="95:91">
        <header className="masthead">
          <h1>
            LIFE IN
            <br />
            LAGOS
          </h1>
          <p>
            Where the journey begins. Nursery, primary, secondary, and a boy
            growing up in the middle of a crowd.
          </p>
        </header>

        <section className="memory memory-01">
          <h2>02 — A full house</h2>
          <p>
            Chris is the second of six. Growing up in the middle of a crowd
            teaches you to share, to stand your ground, and to look out for
            people. He&apos;d need all three. And it all unfolded in one city.
          </p>
        </section>

        <section className="memory memory-03">
          <h2>03 — Stop one: Lagos</h2>
          <p>
            Nursery, primary, secondary. Chris&apos;s whole childhood happened
            here, and the boy who left was nothing like the boy who arrived.
          </p>
        </section>

        <section className="memory memory-04">
          <h2>04 — Lagos mornings</h2>
          <p>
            Uniforms, traffic noise before sunrise, and football outside whenever
            the day allowed. Simple days, long afternoons.
          </p>
        </section>

        <section className="memory memory-05">
          <h2>05 — School days</h2>
          <p>
            Classrooms, friends who knew him before anyone else did, and
            break-time snacks that were never enough.
          </p>
        </section>

        <section className="memory memory-06">
          <h2>06 — How many tubers?</h2>
          <p>
            His dad loved yam. Chris says that growing up, if you asked his dad
            for something like excursion money, he&apos;d look at you and ask,
            &ldquo;Do you know how many tubers I can buy with this?&rdquo; Some
            arguments you just can&apos;t win.
          </p>
        </section>

        <section className="memory memory-07">
          <h2>07 — Dubai</h2>
          <p>
            For all the yam maths, the whole family still made it to Dubai on
            vacation.
          </p>
        </section>

        {photos.map((photo) => (
          <PhotoButton
            key={photo.className}
            photo={photo}
            onOpen={setSelectedPhoto}
          />
        ))}

        <p className="closing">
          The world was waiting. But first, the road led east.
        </p>

        {selectedPhoto && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.alt}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close photograph"
              onClick={() => setSelectedPhoto(null)}
              autoFocus
            >
              Close
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </main>
    </section>
  );
}
