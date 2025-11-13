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
  ChevronRight
} from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'DevOps & AWS Notes' },
    { name: 'description', content: 'Comprehensive DevOps and AWS learning resources and notes' },
  ];
}

export default function Home() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'AWS Services',
      description: 'Complete guide to EC2, S3, Lambda, and more',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure',
      description: 'Terraform, CloudFormation, and architecture',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'CI/CD',
      description: 'GitHub Actions, Jenkins, and deployments',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Container className="w-6 h-6" />,
      title: 'Containerization',
      description: 'Docker, Kubernetes, and ECS/EKS',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Databases',
      description: 'RDS, DynamoDB, and data management',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security',
      description: 'IAM, Security Groups, and best practices',
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  const quickLinks = [
    { name: 'AWS Fundamentals', path: '/docs/aws-fundamentals', count: '12 notes' },
    { name: 'Terraform Guide', path: '/docs/terraform', count: '8 notes' },
    { name: 'Docker & Kubernetes', path: '/docs/containers', count: '15 notes' },
    { name: 'CI/CD Pipelines', path: '/docs/cicd', count: '10 notes' },
  ];

  return (
    <HomeLayout {...baseOptions()}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2.5 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium tracking-wide">
                DevOps & AWS Platform
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Master{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                DevOps
              </span>
              {' '}&{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                AWS
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              Comprehensive notes and tutorials for modern DevOps engineering and Amazon Web Services. 
              Learn through practical examples and real-world scenarios.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                className="group relative bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-2"
                to="/docs"
              >
                <span>Explore Docs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md flex items-center gap-2"
                to="/docs/getting-started"
              >
                <span>Quick Start</span>
                <Terminal className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
                Comprehensive Learning Paths
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Structured content covering all essential DevOps and AWS concepts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Popular Guides
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="group flex items-center justify-between p-6 bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-500"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                      <span className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {link.name}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
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
          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Topics' },
                { number: '100+', label: 'Examples' },
                { number: '25+', label: 'Labs' },
                { number: 'Weekly', label: 'Updates' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-light text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="max-w-2xl mx-auto text-center pt-12 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 font-light">
              Start your DevOps journey today with structured learning paths
            </p>
            
            <Link
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              to="/docs/getting-started"
            >
              <Terminal className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Begin Learning Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}