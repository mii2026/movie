package com.mii2026.movie.common.filter;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import java.io.IOException;

@Slf4j
@Component
public class LoggerFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        ContentCachingRequestWrapper req = new ContentCachingRequestWrapper((HttpServletRequest) request);
        ContentCachingResponseWrapper res = new ContentCachingResponseWrapper((HttpServletResponse) response);

        // next filter
        chain.doFilter(req, res);

        // info
        String uri = req.getRequestURI();
        String method = req.getMethod();
        String requestBody = new String(req.getContentAsByteArray());
        String responseBody = new String(res.getContentAsByteArray());
        res.copyBodyToResponse();

        // request log
        log.info(">>> uri: {}, method: {}, body: {}", uri, method, requestBody);

        // response log
        log.info("<<< uri: {}, method: {}, body: {}", uri, method, responseBody);
    }
}
