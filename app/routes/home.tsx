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
  Terminal
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
      icon: <Cloud className="w-5 h-5" />,
      title: 'AWS Services',
      description: 'Complete guide to EC2, S3, Lambda, and more',
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Infrastructure',
      description: 'Terraform, CloudFormation, and architecture',
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: 'CI/CD',
      description: 'GitHub Actions, Jenkins, and deployments',
    },
    {
      icon: <Container className="w-5 h-5" />,
      title: 'Containerization',
      description: 'Docker, Kubernetes, and ECS/EKS',
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Databases',
      description: 'RDS, DynamoDB, and data management',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Security',
      description: 'IAM, Security Groups, and best practices',
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
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 mb-6">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300 font-poppins">DevOps & AWS Platform</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-poppins font-medium text-white mb-4">
              Master{' '}
              <span className="text-blue-400">DevOps</span>
              {' '}&{' '}
              <span className="text-green-400">AWS</span>
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 font-poppins text-sm leading-relaxed">
              Comprehensive notes and tutorials for modern DevOps engineering and Amazon Web Services.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                className="bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                to="/docs"
              >
                Explore Docs
              </Link>
              <Link
                className="border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-poppins font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                to="/docs/getting-started"
              >
                Quick Start
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors duration-200 group"
              >
                <div className="inline-flex p-2 bg-gray-800 rounded-lg mb-3 group-hover:bg-gray-700 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-white font-poppins font-medium text-base mb-2">{feature.title}</h3>
                <p className="text-gray-400 font-poppins text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-poppins font-medium text-white mb-5">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors duration-200 group"
                >
                  <span className="text-white font-poppins font-medium text-sm group-hover:text-blue-300">
                    {link.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 font-poppins text-xs">{link.count}</span>
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl font-poppins font-medium text-white mb-1">50+</div>
              <div className="text-gray-400 font-poppins text-xs">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-poppins font-medium text-white mb-1">100+</div>
              <div className="text-gray-400 font-poppins text-xs">Examples</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-poppins font-medium text-white mb-1">25+</div>
              <div className="text-gray-400 font-poppins text-xs">Labs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-poppins font-medium text-white mb-1">Weekly</div>
              <div className="text-gray-400 font-poppins text-xs">Updates</div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 font-poppins text-sm mb-4">
              Start your DevOps journey today
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-poppins font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm"
              to="/docs/getting-started"
            >
              <Terminal className="w-4 h-4" />
              Begin Learning
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </HomeLayout>
  );
}