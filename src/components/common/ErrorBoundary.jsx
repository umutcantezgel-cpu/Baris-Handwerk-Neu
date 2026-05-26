import React from 'react';
import { logger } from '@/services/logger';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorId: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        const errorId = `ERR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        this.setState({ errorId });

        // Log using our secure logger
        logger.secureError('Uncaught Exception in React Component Tree', {
            error: error.message,
            componentStack: errorInfo.componentStack,
            errorId
        });
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>

                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Ein unerwarteter Fehler ist aufgetreten
                        </h1>

                        <p className="text-gray-600 mb-6">
                            Entschuldigung, etwas ist schief gelaufen. Unser Team wurde automatisch informiert.
                        </p>

                        {this.state.errorId && (
                            <div className="bg-gray-100 rounded-lg p-3 mb-6 text-xs text-gray-500 font-mono">
                                Fehler-ID: {this.state.errorId}
                            </div>
                        )}

                        <div className="flex gap-3 justify-center">
                            <Button
                                onClick={this.handleReload}
                                className="bg-[#1a3a52] hover:bg-[#1a3a52]/90 text-white"
                            >
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Seite neu laden
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/'}
                                className="border-gray-200"
                            >
                                Zur Startseite
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
