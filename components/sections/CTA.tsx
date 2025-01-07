"use client"

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTA() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Music Experience?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join millions of users who have already discovered the future of music streaming
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download for Windows
              </Button>
              <Button size="lg" variant="outline">
                Download for Mac
              </Button>
              <Button size="lg" variant="outline">
                Download for Linux
              </Button>
            </div>

            <div className="max-w-md mx-auto mb-12">
              <h3 className="text-xl font-semibold mb-4">
                Stay Updated
              </h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold mb-2">10M+</h4>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold mb-2">50M+</h4>
                <p className="text-muted-foreground">Songs Available</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold mb-2">99.9%</h4>
                <p className="text-muted-foreground">Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}