import { useState } from 'react'
import './App.css'

function App() {
  const [expandedSections, setExpandedSections] = useState({});
  const [mongoTestResult, setMongoTestResult] = useState(null);
  const [mongoTesting, setMongoTesting] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const testMongoConnection = async () => {
    setMongoTesting(true);
    setMongoTestResult(null);
    try {
      const res = await fetch('/api/test-mongo');
      const data = await res.json();
      if (data.success) {
        setMongoTestResult({ success: true, message: data.message });
      } else {
        setMongoTestResult({ success: false, message: data.message });
      }
    } catch (err) {
      setMongoTestResult({ success: false, message: err.message });
    } finally {
      setMongoTesting(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>MERN Project Template</h1>
        <p className="subtitle">A modern full-stack application template</p>
      </header>

      <main>
        <section className="project-info">
          <h2>About This Project</h2>
          <p>
            This is a modern MERN (MongoDB, Express.js, React, Node.js) stack project template
            that provides a solid foundation for building full-stack web applications.
          </p>
          
          <div className="github-info">
            <h3>GitHub Repository</h3>
            <a 
              href="https://github.com/i83992473/project-template-mern" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/i83992473/project-template-mern
        </a>
      </div>

          <div className="project-structure">
            <h3>Project Structure</h3>
            <ul>
              <li>
                <strong>client/</strong> - React frontend application
                <ul>
                  <li>Built with Vite for fast development</li>
                  <li>Modern React with hooks and functional components</li>
                  <li>CSS modules for scoped styling</li>
                </ul>
              </li>
              <li>
                <strong>server/</strong> - Node.js backend application
                <ul>
                  <li>Express.js REST API</li>
                  <li>MongoDB integration</li>
                  <li>Environment configuration</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="getting-started">
            <h3>Getting Started</h3>
            <p>
              To start developing with this template:
            </p>
            <ol>
              <li>Clone the repository</li>
              <li>Install dependencies in both client and server directories</li>
              <li>Set up your environment variables</li>
              <li>Run the development servers</li>
            </ol>

            <div className="expandable-section">
              <button 
                className="expand-button"
                onClick={() => toggleSection('installation')}
              >
                Detailed Installation Steps {expandedSections.installation ? '▼' : '▶'}
              </button>
              {expandedSections.installation && (
                <div className="expanded-content">
                  <h4>Step 1: Clone the Repository</h4>
                  <pre>
                    <code>{`
git clone https://github.com/i83992473/project-template-mern.git
cd project-template-mern
`}</code>
                  </pre>

                  <h4>Step 2: Install Dependencies</h4>
                  <p>Run the following command to install all dependencies:</p>
                  <pre>
                    <code>{`
npm run install-all
`}</code>
                  </pre>
                  <p>This will install dependencies for:</p>
                  <ul>
                    <li>Root project (concurrently for running both servers)</li>
                    <li>Client (React frontend)</li>
                    <li>Server (Express backend)</li>
                  </ul>

                  <h4>Step 3: Environment Setup</h4>
                  <p>Set up your environment variables:</p>
                  <ol>
                    <li>
                      Rename the example environment file:
                      <pre>
                        <code># In the server directory
cp .env.example .env</code>
                      </pre>
                    </li>
                    <li>
                      Set up MongoDB Atlas:
                      <ul>
                        <li>Go to <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a> and create a free account</li>
                        <li>Create a new cluster (the free tier is sufficient)</li>
                        <li>In the Security section, create a database user with password</li>
                        <li>In the Network Access section, add your IP address (or use 0.0.0.0/0 for development)</li>
                        <li>Click "Connect" on your cluster and choose "Connect your application"</li>
                        <li>Copy the connection string provided</li>
                      </ul>
                    </li>
                    <li>
                      Update your .env file with the MongoDB connection string:
                      <pre>
                        <code>{`
# server/.env
PORT=5000
# Replace <username>, <password>, and <dbname> with your values
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
`}</code>
                      </pre>
                      <div style={{ minWidth: 220 }}>
                        <button className="mongo-test-btn" onClick={testMongoConnection} disabled={mongoTesting}>
                          {mongoTesting ? 'Testing...' : 'Test MongoDB Connection'}
                        </button>
                        {mongoTestResult && (
                          <div className={mongoTestResult.success ? 'mongo-success' : 'mongo-error'} style={{ marginTop: 8 }}>
                            {mongoTestResult.message}
                          </div>
                        )}
                      </div>
                    </li>
                  </ol>
                  <div className="note">
                    <strong>Note:</strong> Never commit your .env file to version control. It's already added to .gitignore for security.
                  </div>
                </div>
              )}
            </div>

            <div className="expandable-section">
              <button 
                className="expand-button"
                onClick={() => toggleSection('development')}
              >
                Development Workflow {expandedSections.development ? '▼' : '▶'}
              </button>
              {expandedSections.development && (
                <div className="expanded-content">
                  <h4>Running the Development Servers</h4>
                  <p>Start both frontend and backend with a single command:</p>
                  <pre>
                    <code>{`
npm start
`}</code>
                  </pre>
                  <p>This will start:</p>
                  <ul>
                    <li>Frontend at http://localhost:5173</li>
                    <li>Backend at http://localhost:5000</li>
                  </ul>

                  <h4>Available Scripts</h4>
                  <ul>
                    <li><code>npm start</code> - Start both servers</li>
                    <li><code>npm run client</code> - Start only frontend</li>
                    <li><code>npm run server</code> - Start only backend</li>
                    <li><code>npm run build</code> - Build frontend for production</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="expandable-section">
              <button 
                className="expand-button"
                onClick={() => toggleSection('structure')}
              >
                Detailed Project Structure {expandedSections.structure ? '▼' : '▶'}
              </button>
              {expandedSections.structure && (
                <div className="expanded-content">
                  <h4>Frontend Structure (client/)</h4>
                  <pre>
<code>{`
client/
├── public/          # Static files
│   └── favicon.svg  # Application icon
├── src/             # Source files
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # React components
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Application entry point
└── package.json     # Frontend dependencies
`}</code>
                  </pre>

                  <h4>Backend Structure (server/)</h4>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <pre style={{ margin: 0 }}>
<code>{`
server/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── index.js        # Server entry point
└── package.json    # Backend dependencies
`}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>

            <div className="expandable-section">
              <button 
                className="expand-button"
                onClick={() => toggleSection('github')}
              >
                Connect to a New GitHub Repository {expandedSections.github ? '▼' : '▶'}
              </button>
              {expandedSections.github && (
                <div className="expanded-content">
                  <h4>How to Create a New GitHub Repository and Connect Your Project</h4>
                  <ol>
                    <li>
                      <strong>Create a new repository on GitHub:</strong>
                      <ul>
                        <li>Go to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">github.com/new</a></li>
                        <li>Enter a repository name (e.g., <code>my-mern-app</code>)</li>
                        <li>Optionally add a description</li>
                        <li>Keep it <strong>Public</strong> or <strong>Private</strong> as you prefer</li>
                        <li><strong>Do not</strong> initialize with a README, .gitignore, or license (your project already has these)</li>
                        <li>Click <strong>Create repository</strong></li>
                      </ul>
                    </li>
                    <li>
                      <strong>Connect your local project to the new GitHub repository:</strong>
                      <pre>
<code>{`
# In your project root (where this template is cloned)
git remote remove origin # (only if a remote already exists)
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
`}</code>
                      </pre>
                      <ul>
                        <li>Replace <code>your-username</code> and <code>your-repo-name</code> with your GitHub username and the new repository name</li>
                        <li>If you haven't run <code>git init</code> before, do so first</li>
                        <li>If you see an error about an existing remote, use <code>git remote remove origin</code> before adding the new one</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Verify your code is on GitHub:</strong>
                      <ul>
                        <li>Go to your new repository page on GitHub</li>
                        <li>Refresh to see your files and commit history</li>
                      </ul>
                    </li>
                  </ol>
                  <div className="note">
                    <strong>Tip:</strong> This template is designed to be a starting point. Set up your repository now so you can track all your changes from the beginning!
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Built with ❤️ using the MERN stack</p>
      </footer>
      </div>
  )
}

export default App
