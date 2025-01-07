"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Music2,
  ListMusic,
  Ban,
  MessageSquareText,
  Share2,
  UserCircle2,
  Paintbrush,
  WifiOff,
  Podcast
} from 'lucide-react';

export default function CoreFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Music2,
      title: 'Music Downloads',
      description: 'Download your favorite tracks for offline listening',
    },
    {
      icon: ListMusic,
      title: 'Playlist Management',
      description: 'Organize your music with smart playlists',
    },
    {
      icon: Ban,
      title: 'Ad-free Streaming',
      description: 'Enjoy uninterrupted music streaming',
    },
    {
      icon: MessageSquareText,
      title: 'Lyrics Support',
      description: 'View synchronized lyrics while listening',
    },
    {
      icon: Share2,
      title: 'Social Sharing',
      description: 'Share your favorite music with friends',
    },
    {
      icon: UserCircle2,
      title: 'Google Account',
      description: 'Sync across devices with your account',
    },
    {
      icon: Paintbrush,
      title: 'Customization',
      description: 'Personalize your music experience',
    },
    {
      icon: WifiOff,
      title: 'Offline Mode',
      description: 'Listen anywhere, even without internet',
    },
    {
      icon: Podcast,
      title: 'Podcast Support',
      description: 'Access your favorite podcasts',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the ultimate music experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
              }}
              className="p-6 rounded-lg border border-border bg-card transition-colors"
            >
              <feature.icon className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}