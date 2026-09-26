import React, { useState, useRef } from 'react';
import './DesktopCanvas.css';

interface DesktopCanvasProps {
	theme: 'dark' | 'light';
}

interface DragOffset {
	x: number;
	y: number;
}

interface DraggableStickerProps {
	className: string;
	children: React.ReactNode;
}

const DraggableSticker: React.FC<DraggableStickerProps> = ({ className, children }) => {
	const [offset, setOffset] = useState<DragOffset>({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number } | null>(null);

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		// Only drag with primary click/touch
		if (e.button !== 0) return;
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		dragRef.current = {
			startX: e.clientX,
			startY: e.clientY,
			initialX: offset.x,
			initialY: offset.y,
		};
		setIsDragging(true);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!dragRef.current) return;
		const dx = e.clientX - dragRef.current.startX;
		const dy = e.clientY - dragRef.current.startY;
		setOffset({
			x: dragRef.current.initialX + dx,
			y: dragRef.current.initialY + dy,
		});
	};

	const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
		if (dragRef.current) {
			try {
				(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
			} catch {
				// Safe to ignore if pointer already released
			}
			dragRef.current = null;
			setIsDragging(false);
		}
	};

	return (
		<div
			className={`desktop-sticker ${className} ${isDragging ? 'is-dragging' : ''}`}
			style={
				{
					'--drag-x': `${offset.x}px`,
					'--drag-y': `${offset.y}px`,
				} as React.CSSProperties
			}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
			onPointerCancel={handlePointerUp}
		>
			{children}
		</div>
	);
};

const NERD_ASCII = `   .------------.   
  /   __    __   \\  
 |  / o \\==/ o \\  | 
 |  \\___/  \\___/  | 
 |       <        | 
  \\    \\_||_/    /  
   \\____________/   `;

export const StickyNote: React.FC = () => {
	return (
		<DraggableSticker className="sticky-note">
			<div className="sticky-tape" />
			<div className="sticky-content">
				<div className="sticky-ascii-wrap" aria-label="Nerd emoji ASCII art">
					<pre className="sticky-ascii">{NERD_ASCII}</pre>
				</div>
				<p className="sticky-bio">Hi! I'm Mhar, an NYC-based software engineer and Stanford alum.</p>
			</div>
		</DraggableSticker>
	);
};

export const DesktopCanvas: React.FC<DesktopCanvasProps> = ({ theme }) => {
	return (
		<div className="blueprint-grid-layer" data-theme={theme} aria-hidden="true">
			<div className="blueprint-grid" />
		</div>
	);
};
