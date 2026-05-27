"use client";
import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

/**
 * Blog Comments Component
 * Displays comments and allows users to add new comments
 */
const BlogComments = ({ comments = [], postId, onAddComment }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: ''
    });
    const [replyTo, setReplyTo] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            id: Date.now().toString(),
            post_id: postId,
            author_name: formData.name,
            author_email: formData.email,
            content: formData.content,
            created_date: new Date().toISOString(),
            parent_id: replyTo
        };

        if (onAddComment) {
            onAddComment(newComment);
        }

        // Reset form
        setFormData({ name: '', email: '', content: '' });
        setReplyTo(null);

        alert('Kommentar wurde hinzugefügt! (In der finalen Version würde dies zum Server gesendet)');
    };

    // Group comments by parent
    const topLevelComments = comments.filter(c => !c.parent_id);
    const getReplies = (commentId) => comments.filter(c => c.parent_id === commentId);

    const CommentItem = ({ comment, isReply = false }) => (
        <div className={`${isReply ? 'ml-12 mt-4' : 'mb-6'}`}>
            <div className="relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-xl border border-white/20" />
                <div className="relative p-4">
                    {/* Author Info */}
                    <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#c69c6d] flex items-center justify-center text-white font-bold">
                            {comment.author_name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-[#1a3a52]">{comment.author_name}</h4>
                            <p className="text-xs text-[#2c3e50]/60">
                                {new Date(comment.created_date).toLocaleDateString('de-DE', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    </div>

                    {/* Comment Content */}
                    <p className="text-[#2c3e50]/80 leading-relaxed mb-3">
                        {comment.content}
                    </p>

                    {/* Reply Button */}
                    {!isReply && (
                        <button
                            onClick={() => setReplyTo(comment.id)}
                            className="text-sm text-[#c69c6d] hover:underline font-medium"
                        >
                            Antworten
                        </button>
                    )}
                </div>
            </div>

            {/* Replies */}
            {!isReply && getReplies(comment.id).map(reply => (
                <CommentItem key={reply.id} comment={reply} isReply={true} />
            ))}
        </div>
    );

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

            <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <MessageCircle className="w-6 h-6 text-[#c69c6d]" />
                    <h2 className="text-2xl font-bold text-[#1a3a52]">
                        Kommentare ({comments.length})
                    </h2>
                </div>

                {/* Comment Form */}
                <div className="mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-2xl border border-white/30" />
                        <div className="relative p-6">
                            {replyTo && (
                                <div className="mb-4 p-3 bg-[#c69c6d]/10 rounded-lg border border-[#c69c6d]/20 flex items-center justify-between">
                                    <span className="text-sm text-[#1a3a52]">
                                        Antwort auf {comments.find(c => c.id === replyTo)?.author_name}
                                    </span>
                                    <button
                                        onClick={() => setReplyTo(null)}
                                        className="text-sm text-[#2c3e50]/60 hover:text-[#1a3a52]"
                                    >
                                        Abbrechen
                                    </button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#1a3a52] mb-2">
                                            Name *
                                        </label>
                                        <Input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Ihr Name"
                                            className="h-10"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1a3a52] mb-2">
                                            E-Mail * (wird nicht veröffentlicht)
                                        </label>
                                        <Input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="ihre.email@beispiel.de"
                                            className="h-10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#1a3a52] mb-2">
                                        Kommentar *
                                    </label>
                                    <Textarea
                                        required
                                        rows={4}
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        placeholder="Schreiben Sie Ihren Kommentar..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="bg-[#1a3a52] hover:bg-[#132a3c] min-h-[44px]"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Kommentar absenden
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Comments List */}
                <div>
                    {comments.length === 0 ? (
                        <p className="text-center text-[#2c3e50]/60 py-8">
                            Noch keine Kommentare. Seien Sie der Erste!
                        </p>
                    ) : (
                        <div>
                            {topLevelComments.map(comment => (
                                <CommentItem key={comment.id} comment={comment} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogComments;
