'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';


function parseMetricValue(value) {
    if (typeof value !== 'string') return { isNumeric: false, target: 0, suffix: '', hasCommas: false };

    const clean = value.replace(/,/g, '');
    const match = clean.match(/^(\d+)(.*)$/);

    if (!match) {
        return { isNumeric: false, target: 0, suffix: '', hasCommas: false };
    }

    const target = parseInt(match[1], 10);
    return {
        isNumeric: true,
        target,
        suffix: match[2] || '',
        hasCommas: value.includes(',') || target >= 1000,
    };
}


function formatNumber(val, hasCommas) {
    if (hasCommas || val >= 1000) {
        return val.toLocaleString('en-US');
    }
    return val.toString();
}


export function CountUp({ value, start = true, className = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();

    const { isNumeric, target, suffix, hasCommas } = parseMetricValue(value);


    const [count, setCount] = useState(0);

    useEffect(() => {

        if (!isNumeric || !isInView || !start) return;

        if (prefersReducedMotion) {
            setCount(target);
            return;
        }

        let animationFrameId;
        let timeoutId;

        if (target <= 15) {
            let current = 0;
            const stepMs = Math.max(120, Math.min(250, Math.floor(1200 / target)));

            const step = () => {
                current += 1;
                setCount(current);
                if (current < target) {
                    timeoutId = setTimeout(step, stepMs);
                }
            };

            timeoutId = setTimeout(step, stepMs);

            return () => {
                if (timeoutId) clearTimeout(timeoutId);
            };
        }


        const duration = 1600;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);


            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            setCount(current);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [isInView, start, isNumeric, target, prefersReducedMotion]);


    if (!isNumeric) {
        return <span className={className}>{value}</span>;
    }

    const formatted = formatNumber(count, hasCommas);

    return (
        <span ref={ref} className={className}>
            {formatted}{suffix}
        </span>
    );
}


export const useCountUp = CountUp;
