"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Headphones, Share2, Settings } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Download,
      title: 'Lightning Fast Downloads',
      description: 'Download your favorite tracks in seconds',
      progress: 95,
    },
    {
      icon: Headphones,
      title: 'Premium Sound Quality',
      description: 'Experience music in crystal clear quality',
      progress: 98,
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Share your playlists with friends instantly',
      progress: 92,
    },
    {
      icon: Settings,
      title: 'Advanced Settings',
      description: 'Customize your experience to perfection',
      progress: 88,
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience music like never before with our cutting-edge features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg"
            >
              <feature.icon className="h-10 w-10 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {feature.description}
              </p>
              <Progress value={feature.progress} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}