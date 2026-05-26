import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ups, da ist etwas schiefgelaufen
                </h2>

                <p className="text-gray-600 mb-6">
                    Ein unerwarteter Fehler ist aufgetreten. Wir wurden benachrichtigt und arbeiten an einer Lösung.
                </p>

                <div className="bg-red-50 rounded-lg p-4 mb-6 text-left overflow-auto max-h-40">
                    <p className="text-xs font-mono text-red-800 break-all">
                        {error.message}
                    </p>
                </div>

                <div className="flex gap-3 justify-center">
                    <Button
                        onClick={() => window.location.reload()}
                        variant="outline"
                        className="border-gray-200 hover:bg-gray-50"
                    >
                        Seite neu laden
                    </Button>

                    <Button
                        onClick={resetErrorBoundary}
                        className="bg-[#00b050] hover:bg-[#00b050]/90 text-white"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Erneut versuchen
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const ErrorBoundary = ({ children }) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                // Reset the state of your app so the error doesn't happen again
                window.location.href = '/';
            }}
            onError={(error, info) => {
                // Log the error to an error reporting service
                console.error('ErrorBoundary caught an error:', error, info);
            }}
        >
            {children}
        </ReactErrorBoundary>
    );
};
