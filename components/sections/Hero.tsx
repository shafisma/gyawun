"use client"

import { motion } from 'framer-motion';
import { Download, Music, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background to-background/50 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 animate-gradient">
            GYAWN
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Ultimate YouTube Music Experience
          </p>
          
          <div className="flex justify-center gap-4 mb-16">
            <Button size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Now
            </Button>
            <Button size="lg" variant="outline">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg"
            >
              <Music className="h-10 w-10 mb-4 mx-auto text-primary" />
              <h3 className="font-semibold mb-2">Unlimited Music</h3>
              <p className="text-sm text-muted-foreground">
                Access millions of songs without restrictions
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg"
            >
              <Music className="h-10 w-10 mb-4 mx-auto text-primary" />
              <h3 className="font-semibold mb-2">High Quality</h3>
              <p className="text-sm text-muted-foreground">
                Crystal clear audio quality up to 320kbps
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg"
            >
              <Music className="h-10 w-10 mb-4 mx-auto text-primary" />
              <h3 className="font-semibold mb-2">Offline Mode</h3>
              <p className="text-sm text-muted-foreground">
                Download and listen anywhere, anytime
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  );
}