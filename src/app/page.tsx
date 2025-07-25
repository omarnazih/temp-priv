import Link from 'next/link';
import { ArrowRight, Share2 } from 'lucide-react';
import { GALLERY_EXAMPLE_TASKS } from '@/config/app';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { getUserPublishedCases } from '@/lib/firebase/server-actions';
import { GalleryButton } from '@/components/ui/gallery-button';
import { MotionDiv, MotionH1, MotionP } from '@/components/ui/motion-wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Energent.ai - Use Case Gallery & Demos',
  description: `Explore interactive demos of Energent.ai capabilities: ${GALLERY_EXAMPLE_TASKS.map((task) => task.title).join(', ')}.`,
};

export default async function Gallery() {
  const tasks = GALLERY_EXAMPLE_TASKS;
  const userPublishedCases = await getUserPublishedCases();

  return (
    <div className="h-fit w-full bg-background relative overflow-hidden">
      {/* Colorful backdrop elements */}
      <div className="absolute inset-0 -top-8 left-1/2 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/10%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/10%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:hidden opacity-10"></div>
      <div className="absolute inset-x-0 top-4 mx-auto h-2/3 w-3/3 scale-[80%] rounded-full bg-blue-300/10 dark:bg-primary/10 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pb-32 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl text-center">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            Discover what{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              Energent.ai
            </span>{' '}
            can do
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our gallery of examples and see how our AI can transform your workflow
          </MotionP>
        </div>

        {/* Official Examples Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8">Official Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tasks.map((task, index) => {
              const Icon = task.icon;
              return (
                <MotionDiv
                  key={task.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
                >
                  <SpotlightCard
                    className="h-full"
                    spotlightSize={350}
                    gradientColor="rgb(59, 130, 246)"
                    lightGradientColor="rgb(59, 130, 246)"
                    glowEffect={true}
                    glowSize={150}
                    glowOpacity={0.25}
                    spotlightOpacity={0.2}
                  >
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-full">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {task.category}
                          </span>
                          <h3 className="text-xl font-semibold text-foreground">{task.title}</h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{task.description}</p>

                      <div className="mt-auto pt-6">
                        <GalleryButton
                          href={task.route}
                          taskTitle={task.title}
                          taskCategory={task.category}
                          route={task.route}
                          variant="example"
                          className="w-full bg-gradient-to-r from-primary/10 to-indigo-500/10 hover:bg-primary/20 transition-all duration-300"
                          size="lg"
                        >
                          Try example <ArrowRight className="h-4 w-4" />
                        </GalleryButton>
                      </div>
                    </div>
                  </SpotlightCard>
                </MotionDiv>
              );
            })}
          </div>
        </MotionDiv>

        {/* User Published Use Cases Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">User Published Use Cases</h2>

          <Alert className="bg-blue-50 border-blue-200 text-blue-800 mb-8">
            <AlertDescription className="flex items-center gap-2">
              <Share2 className="h-4 w-4 flex-shrink-0" />
              Share your own use of Energent.ai by clicking the Share button, then Publish to see
              your work featured here!
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {userPublishedCases.length > 0 ? (
              userPublishedCases.map((userCase, index) => (
                <MotionDiv
                  key={userCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
                >
                  <SpotlightCard
                    className="h-full"
                    spotlightSize={350}
                    gradientColor="rgb(59, 130, 246)"
                    lightGradientColor="rgb(59, 130, 246)"
                    glowEffect={true}
                    glowSize={150}
                    glowOpacity={0.25}
                    spotlightOpacity={0.2}
                  >
                    <div className="p-6 h-full flex flex-col">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {userCase.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          By {userCase.author}
                        </span>
                      </div>

                      <p className="text-muted-foreground line-clamp-4">
                        {userCase.description || 'No description provided.'}
                      </p>

                      <div className="mt-auto pt-6">
                        <GalleryButton
                          href={userCase.link}
                          caseTitle={userCase.title}
                          caseId={userCase.id}
                          variant="userCase"
                          className="w-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 hover:bg-purple-500/20 transition-all duration-300"
                          size="lg"
                        >
                          View replay <ArrowRight className="h-4 w-4" />
                        </GalleryButton>
                      </div>
                    </div>
                  </SpotlightCard>
                </MotionDiv>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-muted-foreground">
                  No user published cases yet. Be the first to share your work!
                </p>
              </div>
            )}
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <GalleryButton
            href="/agent"
            variant="tryNow"
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 transition-all duration-300 group hover:scale-105"
            size="lg"
          >
            <span className="relative">Try Energent.ai now</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </GalleryButton>
        </MotionDiv>
      </div>
    </div>
  );
}