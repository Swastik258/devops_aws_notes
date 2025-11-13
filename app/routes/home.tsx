import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { baseOptions } from '@/lib/layout.shared';
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Container, 
  Database, 
  Shield,
  Terminal,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  BookOpen,
  Play,
  Code,
  Layout,
  Cpu
} from 'lucide-react';
import { useEffect, useState } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'DevOps & AWS Notes' },
    { name: 'description', content: 'Comprehensive DevOps and AWS learning resources and notes' },
  ];
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slower" />
    </div>
  );
}

function FloatingElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div 
      className="animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Cloud className="w-5 h-5" />,
      title: 'AWS Services',
      description: 'Complete guide to EC2, S3, Lambda, and more',
      color: 'blue'
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Infrastructure',
      description: 'Terraform, CloudFormation, and architecture',
      color: 'purple'
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: 'CI/CD',
      description: 'GitHub Actions, Jenkins, and deployments',
      color: 'green'
    },
    {
      icon: <Container className="w-5 h-5" />,
      title: 'Containerization',
      description: 'Docker, Kubernetes, and ECS/EKS',
      color: 'orange'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Databases',
      description: 'RDS, DynamoDB, and data management',
      color: 'indigo'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Security',
      description: 'IAM, Security Groups, and best practices',
      color: 'gray'
    }
  ];

  const quickLinks = [
    { 
      name: 'AWS Fundamentals', 
      path: '/docs/aws-fundamentals', 
      count: '12 notes', 
      icon: <Cloud className="w-4 h-4" />,
      description: 'Core AWS services and concepts'
    },
    { 
      name: 'Terraform Guide', 
      path: '/docs/terraform', 
      count: '8 notes', 
      icon: <Layout className="w-4 h-4" />,
      description: 'Infrastructure as Code with Terraform'
    },
    { 
      name: 'Docker & Kubernetes', 
      path: '/docs/containers', 
      count: '15 notes', 
      icon: <Container className="w-4 h-4" />,
      description: 'Container orchestration and management'
    },
    { 
      name: 'CI/CD Pipelines', 
      path: '/docs/cicd', 
      count: '10 notes', 
      icon: <GitBranch className="w-4 h-4" />,
      description: 'Automated deployment workflows'
    },
  ];

  const stats = [
    { number: '50+', label: 'Topics', icon: <BookOpen className="w-4 h-4" /> },
    { number: '100+', label: 'Examples', icon: <Code className="w-4 h-4" /> },
    { number: '25+', label: 'Labs', icon: <Terminal className="w-4 h-4" /> },
    { number: 'Weekly', label: 'Updates', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-cyan-500',
      purple: 'from-purple-500 to-pink-500',
      green: 'from-green-500 to-emerald-500',
      orange: 'from-orange-500 to-red-500',
      indigo: 'from-indigo-500 to-purple-500',
      gray: 'from-gray-600 to-gray-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <HomeLayout {...baseOptions()}>
      <div className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden">
        <BackgroundGrid />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <FloatingElement delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  DevOps & AWS Learning Platform
                </span>
              </div>
            </FloatingElement>
            
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Master{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                DevOps
              </span>
              <br />
              &{' '}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                AWS
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Comprehensive learning resources for modern DevOps engineering and 
              Amazon Web Services. Practical examples and real-world scenarios.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className="group relative bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-gray-900 dark:border-white"
                to="/docs"
              >
                <span>Explore Documentation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                className="group bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:border-gray-400 dark:hover:border-gray-500 flex items-center gap-2"
                to="/docs/getting-started"
              >
                <Play className="w-4 h-4" />
                <span>Quick Start</span>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-6xl mx-auto mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
                Learning Paths
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Structured content covering all essential DevOps and AWS concepts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${getColorClasses(feature.color)} rounded-xl mb-4 text-white`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="max-w-4xl mx-auto mb-32">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-5 h-5 text-blue-500" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Popular Guides
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="group flex items-start justify-between p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                        {link.icon}
                      </div>
                      <div>
                        <div className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1">
                          {link.name}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">
                          {link.description}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                        {link.count}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                >
                  <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm font-medium flex items-center justify-center gap-2">
                    {stat.icon}
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
              <Cpu className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Start Your DevOps Journey
              </h3>
              <p className="text-blue-100 mb-6">
                Join thousands of developers learning modern DevOps practices
              </p>
              
              <Link
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                to="/docs/getting-started"
              >
                <Terminal className="w-4 h-4" />
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.02); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
      `}</style>
    </HomeLayout>
  );
}