import { useRef, useState, useEffect } from "react";

interface VideoPlayerProps {
    src?: string;
    poster?: string;
    title?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    className?: string;
}

export default function VideoSlider({
    src = "/videoslider.mp4",
    poster = "/recycle-slider.png",
    title = "Building a Sustainable Industrial Future",
    autoPlay = true,
    loop = true,
    muted = true,
    className = "",
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [, setPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(muted);

    // Auto-resolve video source: if "/videoslider" without extension is passed, map to "/videoslider.mp4"
    const resolvedSrc = src === "/videoslider" ? "/videoslider.mp4" : src;

    // Auto-play the video smoothly when component mounts
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (autoPlay) {
            video.muted = isMuted;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setPlaying(true))
                    .catch(() => {
                        // If unmuted playback is blocked by browser policy, mute and retry
                        video.muted = true;
                        setIsMuted(true);
                        video.play().then(() => setPlaying(true)).catch(() => { });
                    });
            }
        }
    }, [resolvedSrc, autoPlay, isMuted]);

    // Check if source is a YouTube URL
    const getYouTubeEmbedUrl = (url: string) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&loop=1&playlist=${match[2]}&controls=0&rel=0`;
        }
        return null;
    };

    const youtubeEmbedUrl = getYouTubeEmbedUrl(resolvedSrc);

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden bg-black h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[88vh] min-h-[420px] max-h-[850px] ${className}`}
        >
            {youtubeEmbedUrl ? (
                <div className="relative w-full h-full overflow-hidden select-none">
                    <iframe
                        src={`${youtubeEmbedUrl}&mute=1&autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&playsinline=1`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        tabIndex={-1}
                        className="absolute top-1/2 left-1/2 w-[140vw] h-[140vh] min-w-[100%] min-h-[100%] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none object-cover"
                    />
                    {/* Transparent touch/click blocker layer so YouTube never triggers on-screen pause/prev/next controls */}
                    <div className="absolute inset-0 z-10 bg-transparent cursor-default" />
                    {/* Top gradient overlay so navbar is crystal clear */}
                    <div className="absolute inset-x-0 top-0 h-32 sm:h-40 z-20 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 z-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
            ) : (
                <>
                    <video
                        ref={videoRef}
                        src={resolvedSrc}
                        poster={poster}
                        autoPlay={autoPlay}
                        loop={loop}
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover object-center select-none"
                        aria-label={title}
                    />

                    {/* Clean localized backdrop patch to seamlessly hide the top-right video logo without distorting video */}
                    <div className="absolute top-0 right-0 w-36 sm:w-44 md:w-52 h-16 sm:h-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md pointer-events-none z-10" />

                    {/* Top gradient so navbar is crystal clear */}
                    <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-black/75 via-black/35 to-transparent pointer-events-none" />

                    {/* Center Hero Heading Overlay - fully responsive typography & spacing */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 z-20 pointer-events-none pt-12 sm:pt-0">
                        <span className="inline-block px-3.5 py-1 mb-3 sm:mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs md:text-sm font-semibold text-rose-200 tracking-wider uppercase">
                            Innovix Industries
                        </span>
                        <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-xl max-w-5xl leading-snug sm:leading-tight">
                            {title}
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mt-2.5 sm:mt-4 max-w-2xl font-normal sm:font-medium drop-shadow-md px-2">
                            Leading scrap trading & sustainable metal recycling company specializing in ferrous and non-ferrous solutions.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
